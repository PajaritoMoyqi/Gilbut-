import { MdAdd } from 'react-icons/md';
import './NotToDoInsert.scss';

const NotToDoInsert = () => {
  return (
    <form className="NotToDoInsert">
      <input placeholder="type not-to-do" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  )
}

export default NotToDoInsert;