import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import './NotToDoListItem.scss';
import NotToDoInsert from './NotToDoInsert';

const NotToDoListItem = () => {
  return (
    <div className="NotToDoListItem">
      <div className="checkbox">
        <MdCheckBoxOutlineBlank />
        <div className="text">Not to do</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default NotToDoListItem;