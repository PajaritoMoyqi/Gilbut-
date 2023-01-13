import Lists from '../components/Lists';
import { connect } from 'react-redux';
import { changeText, create, toggle, remove } from '../modules/lists';

const ListContainer = ({ text, lists, changeText, create, toggle, remove }) => {
  return (
    <Lists text={text} lists={lists} onChangeText={changeText} onCreate={create} onToggle={toggle} onRemove={remove} />
  );
}

export default connect(
  ({ lists }) => ({
    text: lists.text,
    lists: lists.lists
  }),
  {
    changeText, create, toggle, remove
  }
)(ListContainer);