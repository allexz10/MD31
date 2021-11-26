/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';

type dataArray = {
  slug: string;
  name: string;
  members: [
    {
      name: string;
    }
  ];
};

const Houses = () => {
  const [post, setPost] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsValue = searchParams.get('filter') || '';

  useEffect(() => {
    axios
      .get('https://game-of-thrones-quotes.herokuapp.com/v1/houses')
      .then(({ data }: AxiosResponse<dataArray>) => {
        // @ts-ignore
        setPost(data);
      });
  }, []);

  return (
    <div
      className="houses"
    >
      <h1
        style={{
          fontSize: '36px',
          fontWeight: 'bold',
          padding: '30px 0px',
        }}
      >
        Game of Thrones
      </h1>
      <input
        className="users__search"
        type="text"
        placeholder="Search a house"
        value={searchParamsValue}
        onChange={(e) => {
          const filter = e.target.value;
          setSearchParams({ filter });
        }}
      />
      {post
        .filter(// @ts-ignore
          ({ name }) => name.toLowerCase().indexOf(searchParamsValue) > -1,
        )
        .map(
          (// @ts-ignore
            { slug, name, members },
          ) => (
            <div
              className="houses__content"
              key={name}
            >
              <h1
                className="houses__content--title"
              >
                {name}
              </h1>

              {members.map(
                (
                  // @ts-ignore
                  { name, slug },
                ) => (
                  <Link
                    className="houses__link"
                    key={slug}
                    to={`/characters/${slug}`}
                  >
                    {name}
                  </Link>
                ),
              )}
            </div>
          ),
        )}
    </div>
  );
};

export default Houses;
