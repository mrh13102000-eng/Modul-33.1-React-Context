import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import { VoteContext } from '../context/VoteContext';
import '../style.css';

function Home() {
  const { todos, setSelectedTodo } = useContext(TodoContext);
  const { votes, addVote } = useContext(VoteContext);
  const [user, setUser] = useState('Semua');
  const navigate = useNavigate();

  const filteredTodos = user === 'Semua'
    ? todos
    : todos.filter(todo => todo.user === user);

  function handleClick(todo) {
    setSelectedTodo(todo);
    navigate('/detail');
  }

  return (
    <div className="container">
      <h1>Todo List</h1>

      <select onChange={(e) => setUser(e.target.value)}>
        <option value="Semua">Semua User</option>
        <option value="Budi">Budi</option>
        <option value="Siti">Siti</option>
      </select>

      {filteredTodos.map(todo => (
        <div className="todo-item" key={todo.id}>

          <div>
            <p className="todo-title">{todo.title}</p>
            <p className="todo-user">{todo.user}</p>
          </div>

          {/* Tombol-tombol */}
          <div className="vote-section">
            <span className="vote-count">{votes[todo.id] || 0}</span>
            <button onClick={() => addVote(todo.id)}>
              Vote
            </button>
            <button
              onClick={() => handleClick(todo)}
              style={{ background: '#28a745' }}
            >
              Lihat Detail
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Home;