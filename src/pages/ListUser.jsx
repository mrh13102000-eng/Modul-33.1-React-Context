import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../style.css';

function ListUser() {
  const location = useLocation();

  useEffect(() => {
    console.log("URL berubah!", location.pathname);
  }, [location]);

  return (
    <div className="container">
      <h1>List User</h1>
      <Link to="/users/1">Detail User 1</Link>
      <Link
        to="/users/1/comments"
        state={{ namaUser: "Budi Santoso" }} // ← kirim data!
      >
        Comment User 1
      </Link>
      <Link className="back-link" to="/">Kembali ke Utama</Link>
    </div>
  );
}

export default ListUser;