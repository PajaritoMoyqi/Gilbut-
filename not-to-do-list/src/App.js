import { useReducer, useRef, useCallback } from 'react';

import './App.css';
import NotToDoTemplate from './components/NotToDoTemplate';
import NotToDoInsert from './components/NotToDoInsert';
import NotToDoList from './components/NotToDoList';

const createBulkNotTodos = () => {
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

const notTodoReducer = (notTodos, action) => {
  switch(action.type){
    case 'INSERT':
      return [
        ...notTodos,
        action.notTodo
      ];
    case 'REMOVE':
      return notTodos.filter(notTodo => notTodo.id !== action.id);
    case 'TOGGLE':
      return notTodos.map(notTodo => notTodo.id === action.id ? {...notTodo, checked: !notTodo.checked} : notTodo);
    default:
      return notTodos;
  }
}

const App = () => {
  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    dispatch({ type: 'INSERT', notTodo: {id: nextId.current, text, checked: false} })

    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id => {
    dispatch({ type: 'REMOVE', id: id });
  }, []);

  const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id: id })
  }, [])

  const [notTodos, dispatch] = useReducer(notTodoReducer, undefined, createBulkNotTodos);


  return (
    <NotToDoTemplate>
      <NotToDoInsert onInsert={onInsert} />
      <NotToDoList notTodos={notTodos} onRemove={onRemove} onToggle={onToggle} />
    </NotToDoTemplate>
  );
}

export default App;
