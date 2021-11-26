import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="notfound">
    <div className="notfound__content">
      <h1 style={{ fontSize: '40px', color: '#252525' }}>Oops that page can’t be found</h1>
      <span style={{
        fontSize: '50px', color: '#252525', textAlign: 'center', marginBottom: '40px',
      }}
      >
        404 error
      </span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link className="character__link--back" to="/">
          home
        </Link>
      </div>

    </div>
  </div>
);
export default NotFound;
