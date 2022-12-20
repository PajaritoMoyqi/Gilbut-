import { useState, useRef, useCallback } from 'react';

import './App.css';
import NotToDoTemplate from './components/NotToDoTemplate';
import NotToDoInsert from './components/NotToDoInsert';
import NotToDoList from './components/NotToDoList';
import NotToDoListItem from './components/NotToDoListItem';

const createBulkTodos = () => {
  const array = [];

  for(let i = 1; i<=2500; i++){
    array.push({
      id: i,
      text: `${i}번째 할 일`,
      checked: false
    });
  }
  
  return array;
}

function App() {
  const [notTodos, setNotTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    setNotTodos(notTodos => [
      ...notTodos,
      {id: nextId.current, text, checked: false}
    ]);

    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id => {
    setNotTodos(notTodos => notTodos.filter(notTodo => notTodo.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setNotTodos(notTodos => notTodos.map(notTodo => notTodo.id === id ? {...notTodo, checked: !notTodo.checked} : notTodo));
  }, [])

  return (
    <NotToDoTemplate>
      <NotToDoInsert onInsert={onInsert} />
      <NotToDoList notTodos={notTodos} onRemove={onRemove} onToggle={onToggle} />
    </NotToDoTemplate>
  );
}

export default App;
