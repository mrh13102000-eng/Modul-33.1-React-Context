import { Link } from 'react-router-dom';
import '../style.css';

function ListUser() {
  return (
    <div className="container">
      <h1>List User</h1>
      <Link to="/users/1" className="back-link">
        Detail User 1
      </Link>
      <Link to="/" className="back-link">
        Kembali ke Utama
      </Link>
    </div>
  );
}
export default ListUser;