/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import './Page.scss';

type dataCharacter = {
  name: string;
  slug: string;
  house: { slug: string; name: string };
  quotes: string[];
};

type dataHouses = {
  slug: string;
  name: string;
  members: [
    {
      name: string;
      slug: string;
    }
  ];
};

const Characters = () => {
  const [post, setPost] = useState<string[]>([]);

  const [allSlugs, setAllSlugs] = useState<string[]>([]);

  const { slug } = useParams<'slug'>() as { slug: string };
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get('https://game-of-thrones-quotes.herokuapp.com/v1/houses')
      .then(({ data }: AxiosResponse<dataHouses>) => {
        // @ts-ignore
        const slagName = data.map((item) => item.slug);
        setAllSlugs(slagName);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://game-of-thrones-quotes.herokuapp.com/v1/character/${slug}`)
      .then(({ data }: AxiosResponse<dataCharacter>) => {
        // @ts-ignore
        setPost(data);
      });
  }, []);

  return (
    <div
      className="characters"
    >
      {post.map(
        ({ // @ts-ignore
          item, quotes, name, house,
        }) => (
          <div
            className="characters__wrapper"
            key={name}
          >
            <h3 style={{
              fontSize: '34px',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
            >
              {name}
            </h3>

            <h4
              style={{
                fontSize: '26px',
                marginBottom: '60px',
                textAlign: 'center',
              }}
            >
              {house.name}
            </h4>
            <h4
              style={{
                fontSize: '22px',
                marginBottom: '20px',
                textAlign: 'left',
              }}
            >
              Quotes:
            </h4>
            {quotes.map((// @ts-ignore
              quote,
            ) => (
              <h4
                key={quote}
                style={{
                  fontSize: '22px',
                  marginBottom: '20px',
                  lineHeight: '1.4',
                }}
              >
                {quote}
              </h4>
            ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'end',
                marginTop: '40px',
              }}
            >
              <Link
                className="characters__link--back"
                to="/houses"
              >
                back
              </Link>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default Characters;
