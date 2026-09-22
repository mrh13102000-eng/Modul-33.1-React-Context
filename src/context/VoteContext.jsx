import { createContext, useState } from 'react';

export const VoteContext = createContext();

export function VoteProvider({ children }) {
  const [votes, setVotes] = useState({});
  // votes = { 1: 3, 2: 0, 3: 1 } → id todo: jumlah vote

  function addVote(todoId) {
    setVotes(prev => ({
      ...prev,
      [todoId]: (prev[todoId] || 0) + 1
    }));
  }

  return (
    <VoteContext.Provider value={{ votes, addVote }}>
      {children}
    </VoteContext.Provider>
  );
}