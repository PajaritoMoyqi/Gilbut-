import { useState, useEffect, useReducer, useMemo, useCallback, useRef } from 'react';

const getRandomColorCode = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const numberReducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT':
      return { value: state.value +1 }
    case 'DECREMENT':
      return { value: state.value -1 }
    case 'DOUBLE':
      return { value: state.value *2 }
    default:
      return state;
  }
}
const inputReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  }
}

const Hooks = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000');
  const [number, dispatchNumber] = useReducer(numberReducer, {value: 0});
  const [inputState, dispatchInputState] = useReducer(inputReducer, {message: '', addressee: ''});
  const defaultInputEl = useRef(null);

  useEffect(() => {
    console.log('mounted');
    defaultInputEl.current.focus();
  }, []);
  useEffect(() => {
    console.log('name changed')
    setColor(getRandomColorCode());
    return () => {
      console.log('cleanup part');
      console.log(name);
    }
  }, [name, number.value]);
  
  const onChangeName = useCallback(e => {
    setName(e.target.value);
  }, []);
  const onChange = useCallback(e => {
    dispatchInputState(e.target);
  }, []);

  const style = {
    color: color
  }
  const { message, addressee } = inputState;
  const luckyNumber = useMemo(() => {
    console.log('calculating lucky number');
    return number.value * 7;
  }, [number.value]);

  return (
    <div>
      <input value={name} onChange={onChangeName} ref={defaultInputEl} />
      <p>name: <span style={style}>{name}</span></p>

      <hr />

      <p>number: <span style={style}>{number.value}</span></p>
      <button onClick={() => dispatchNumber({type: 'INCREMENT'})}>+1</button>
      <button onClick={() => dispatchNumber({type: 'DECREMENT'})}>-1</button>
      <button onClick={() => dispatchNumber({type: 'DOUBLE'})}>*2</button>
      <p>Your lucky number: {luckyNumber}</p>

      <hr />

      <input name="addressee" value={addressee} placeholder="addressee" onChange={onChange} />
      <input name="message" value={message} placeholder="message" onChange={onChange} />
      <p><b>To {addressee}</b>, "{message}"</p>
    </div>
  )
}

export default Hooks;