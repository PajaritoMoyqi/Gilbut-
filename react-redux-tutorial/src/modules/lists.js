const CHANGE_TEXT = 'lists/CHANGE_TEXT';
const CREATE = 'lists/CREATE';
const TOGGLE = 'lists/TOGGLE';
const REMOVE = 'lists/REMOVE';

export const changeText = text => ({
  type: CHANGE_TEXT,
  text
});

let id = 4;
export const create = text => ({
  type: CREATE,
  list: {
    id: id++,
    desc: text,
    done: false
  }
});
export const toggle = id => ({
  type: TOGGLE,
  id
});
export const remove = id => ({
  type: REMOVE,
  id
});

const initialState = {
  text: '',
  lists: [
    {id: 1, desc: 'Trip To Latin America', done: true},
    {id: 2, desc: 'Trip To Egypt', done: false},
    {id: 3, desc: 'Learn Sign Language', done: false},
  ]
};

const lists = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case CREATE:
      return {
        ...state,
        lists: state.lists.concat(action.list)
      }
    case TOGGLE:
      return {
        ...state,
        lists: state.lists.map(list => list.id === action.id ? {...list, done: !list.done} : list )
      }
    case REMOVE:
      return {
        ...state,
        lists: state.lists.filter(list => list.id !== action.id)
      }
    default:
      return state
  }
}

export default lists;