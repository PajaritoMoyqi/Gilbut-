import { useState, useRef, useCallback } from 'react';

import './App.css';
import NotToDoTemplate from './components/NotToDoTemplate';
import NotToDoInsert from './components/NotToDoInsert';
import NotToDoList from './components/NotToDoList';
import NotToDoListItem from './components/NotToDoListItem';

function App() {
  const [notTodos, setNotTodos] = useState([
    {id: 1, text: '하루 목표를 다 하기 전에 다른짓 하지 말자', checked: false},
    {id: 2, text: '혼밥 할 때 1시간 반 이상 하지 말자', checked: true},
  ]);

  const nextId = useRef(3);

  const onInsert = useCallback(text => {
    setNotTodos([
      ...notTodos,
      {id: nextId.current, text, checked: false}
    ]);

    nextId.current += 1;
  }, [notTodos]);

  const onRemove = useCallback(id => {
    setNotTodos(notTodos.filter(notTodo => notTodo.id !== id));
  }, [notTodos]);

  const onToggle = useCallback(id => {
    setNotTodos(notTodos.map(notTodo => notTodo.id === id ? {...notTodo, checked: !notTodo.checked} : notTodo));
  }, [notTodos])

  return (
    <NotToDoTemplate>
      <NotToDoInsert onInsert={onInsert} />
      <NotToDoList notTodos={notTodos} onRemove={onRemove} onToggle={onToggle} />
    </NotToDoTemplate>
  );
}

export default App;
