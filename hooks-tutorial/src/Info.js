import useInput from './useInput';

const Info = () => {
  const [state, onChange] = useInput({
    name: '',
    nickname: ''
  });
  
  const { name, nickname } = state;

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