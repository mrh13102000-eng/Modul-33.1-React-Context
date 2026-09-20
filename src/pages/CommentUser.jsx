import { Link, useParams } from 'react-router-dom';
import '../style.css';

function CommentUser() {
  const { user_id } = useParams();
  return (
    <div className="container">
      <h1>Comment User #{user_id}</h1>
      <Link to={`/users/${user_id}`} className="back-link">
        Kembali ke Detail User
      </Link>
    </div>
  );
}
export default CommentUser;