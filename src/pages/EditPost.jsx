import { Link, useParams } from 'react-router-dom';
import '../style.css';

function EditPost() {
  const { user_id, post_id } = useParams();
  return (
    <div className="container">
      <h1>Edit Post #{post_id} milik User #{user_id}</h1>
      <Link to={`/users/${user_id}/posts`} className="back-link">
        Kembali ke Post
      </Link>
    </div>
  );
}
export default EditPost;