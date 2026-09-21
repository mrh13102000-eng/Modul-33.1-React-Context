import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../style.css';

function EditPost() {
  const { user_id, post_id } = useParams();
  const navigate = useNavigate();
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');

  function handleSubmit() {
    if (judul === '' || isi === '') {
      alert('Judul dan isi tidak boleh kosong!');
      return;
    }
    alert(`Post #${post_id} berhasil diupdate!`);
    navigate(`/users/${user_id}/posts`); // ← balik ke Post setelah simpan!
  }

  return (
    <div className="container">
      <h1>Edit Post #{post_id} milik User #{user_id}</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Judul post"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
        <textarea
          placeholder="Isi post"
          value={isi}
          rows={5}
          onChange={(e) => setIsi(e.target.value)}
          style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSubmit}
          style={{ padding: '10px', background: '#6c63ff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
        >
          Simpan
        </button>
      </div>

      <Link className="back-link" to={`/users/${user_id}/posts`}>
        Kembali ke Post
      </Link>
    </div>
  );
}

export default EditPost;