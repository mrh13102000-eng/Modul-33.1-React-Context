import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { VoteProvider } from './context/VoteContext';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <VoteProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </VoteProvider>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;