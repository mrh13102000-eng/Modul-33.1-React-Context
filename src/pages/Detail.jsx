import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import { VoteContext } from '../context/VoteContext';
import '../style.css';

function Detail() {
  const { selectedTodo } = useContext(TodoContext);
  const { votes, addVote } = useContext(VoteContext);

  if (!selectedTodo) return (
    <div className="container">
      <p>Tidak ada todo dipilih!</p>
      <Link className="back-link" to="/">Kembali</Link>
    </div>
  );

  return (
    <div className="container">
      <h1>Detail Todo</h1>
      <div className="detail-card">
        <p>Judul: <span>{selectedTodo.title}</span></p>
        <p>User: <span>{selectedTodo.user}</span></p>
        <p>Vote: <span>{votes[selectedTodo.id] || 0}</span></p>

        {/* ← Tambah tombol vote di sini! */}
        <button
          onClick={() => addVote(selectedTodo.id)}
          style={{ marginTop: '10px' }}
        >
        Vote
        </button>

      </div>
      <Link className="back-link" to="/">Kembali</Link>
    </div>
  );
}

export default Detail;