import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Utama from './pages/Utama';
import ListUser from './pages/ListUser';
import DetailUser from './pages/DetailUser';
import PostUser from './pages/PostUser';
import EditPost from './pages/EditPost';
import CommentUser from './pages/CommentUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Utama />} />
        <Route path="/users" element={<ListUser />} />
        <Route path="/users/:user_id" element={<DetailUser />} />
        <Route path="/users/:user_id/posts" element={<PostUser />} />
        <Route path="/users/:user_id/posts/:post_id/edit" element={<EditPost />} />
        <Route path="/users/:user_id/comments" element={<CommentUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;