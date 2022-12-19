import { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  }
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  
  const { name, nickname } = state;

  const onChange = e => {
    dispatch(e.target);
  }

  return (
    <div>
      <div>
        <input value={name} name="name" onChange={onChange} />
        <input value={nickname} name="nickname" onChange={onChange} />
      </div>
      <div>
        <div><b>Name:</b> {name}</div>
        <div><b>Nickname:</b> {nickname}</div>
      </div>
    </div>
  )
}

export default Info;