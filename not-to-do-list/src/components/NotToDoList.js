import NotToDoListItem from './NotToDoListItem';
import './NotToDoList.scss';

const NotToDoList = () => {
  return (
    <div className="NotToDoList">
      <NotToDoListItem />
      <NotToDoListItem />
      <NotToDoListItem />
    </div>
  )
}

export default NotToDoList;