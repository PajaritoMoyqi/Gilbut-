import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './NotToDoListItem.scss';

const NotToDoListItem = ({ notTodo, onRemove, onToggle }) => {
  const { text, checked, id } = notTodo;

  return (
    <div className="NotToDoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)} >
        { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
        <div className="text">{ text }</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  )
}

export default React.memo(NotToDoListItem);