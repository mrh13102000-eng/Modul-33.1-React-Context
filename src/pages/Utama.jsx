import { Link } from 'react-router-dom';
import '../style.css';
function Utama() {
  return (
    <div className="container">
      <h1>Halaman Utama</h1>
      <Link to="/users" className="back-link">
        Lihat List User
      </Link>
    </div>
  );
}
export default Utama;