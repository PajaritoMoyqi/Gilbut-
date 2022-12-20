import NotToDoListItem from './NotToDoListItem';
import './NotToDoList.scss';

const NotToDoList = ({ notTodos, onRemove, onToggle }) => {
  return (
    <div className="NotToDoList">
      {notTodos.map(notTodo => {
        return <NotToDoListItem key={notTodo.id} notTodo={notTodo} onRemove={onRemove} onToggle={onToggle} />;
      })}
    </div>
  )
}

export default NotToDoList;