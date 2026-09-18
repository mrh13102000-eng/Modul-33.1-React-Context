import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Halaman Home</h1>
      <Link to="/create">Buat Todo Baru</Link>
      <Link to="/detail/1">Lihat Detail</Link>
      <Link to="/edit/1">Edit Todo</Link>
    </div>
  );
}

export default Home;