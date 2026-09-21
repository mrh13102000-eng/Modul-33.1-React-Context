import { Link, NavLink, useParams } from 'react-router-dom';
import '../style.css';

function DetailUser() {
  const { user_id } = useParams();

  return (
    <div className="container">

      {/* Breadcrumb */}
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/">Utama</NavLink> {' > '}
        <NavLink to="/users">List User</NavLink> {' > '}
        <NavLink to={`/users/${user_id}`}>Detail User</NavLink>
      </nav>

      <h1>Detail User #{user_id}</h1>
      <Link to={`/users/${user_id}/posts`}>Post User</Link>
      <Link to={`/users/${user_id}/comments`}>Comment User</Link>
      <Link className="back-link" to="/users">Kembali</Link>
    </div>
  );
}

export default DetailUser;