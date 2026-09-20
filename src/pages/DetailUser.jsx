import { Link, useParams } from 'react-router-dom';
import '../style.css';

function DetailUser() {
  const { user_id } = useParams();
  return (
    <div className="container">
      <h1>Detail User #{user_id}</h1>
      <Link to={`/users/${user_id}/posts`} className="back-link">
        Post User
      </Link>
      <Link to={`/users/${user_id}/comments`} className="back-link">
        Comment User
      </Link>
      <Link to="/users" className="back-link">
        Kembali ke List User
      </Link>
    </div>
  );
}
export default DetailUser;