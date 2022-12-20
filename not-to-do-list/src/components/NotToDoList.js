import React, { useCallback } from 'react';
import { List } from 'react-virtualized';

import NotToDoListItem from './NotToDoListItem';
import './NotToDoList.scss';

const NotToDoList = ({ notTodos, onRemove, onToggle }) => {
  const rowRenderer = useCallback(({ index, key, style }) => {
    const notTodo = notTodos[index];

    return (
      <NotToDoListItem key={key} notTodo={notTodo} onRemove={onRemove} onToggle={onToggle} style={style} />
    )
  }, [onRemove, onToggle, notTodos]);

  return (
    <List 
      className="NotToDoList"
      width={512} height={513}
      rowCount={notTodos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={notTodos}
      style={{ outline: 'none' }}
    />
  )
}

export default React.memo(NotToDoList);