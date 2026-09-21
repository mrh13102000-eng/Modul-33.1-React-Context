import { Link, useLocation, useParams } from 'react-router-dom';
import '../style.css';

function CommentUser() {
  const { user_id } = useParams();
  const location = useLocation();
  const namaUser = location.state?.namaUser; // ← terima data!

  return (
    <div className="container">
      <h1>Comment User #{user_id}</h1>
      <p>Nama User: {namaUser}</p> {/* ← tampilkan! */}
      <Link className="back-link" to={`/users/${user_id}`}>
        Kembali ke Detail User
      </Link>
    </div>
  );
}

export default CommentUser;