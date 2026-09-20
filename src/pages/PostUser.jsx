import { Link, useParams } from 'react-router-dom';
import '../style.css';

function PostUser() {
  const { user_id } = useParams();
  return (
    <div className="container">
      <h1>Post User #{user_id}</h1>
      <Link to={`/users/${user_id}/posts/1/edit`} className="back-link">
        Edit Post 1
      </Link>
      <Link to={`/users/${user_id}`} className="back-link">
        Kembali ke Detail User
      </Link>
    </div>
  );
}
export default PostUser;