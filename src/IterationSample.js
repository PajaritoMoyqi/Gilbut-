import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Nova' },
    { id: 3, name: 'Richardson' },
    { id: 4, name: 'Miguel' },
    { id: 5, name: 'Hwang' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(6);

  const onRemove = id => {
    const nextNames = names.filter(person => person.id !== id);
    setNames(nextNames);
  }

  const nameList = names.map((person) => <li onDoubleClick={() => onRemove(person.id)} key={person.id}>{person.name}</li>);
  const onChange = e => {
    setInputText(e.target.value);
  }
  const onClick = e => {
    setNames([
      ...names,
      { id: nextId, name: inputText }
    ]);

    setNextId(nextId + 1);
    setInputText('');
  }

  return (
    <>
      <ul>{ nameList }</ul>
      <input value={inputText} onChange={onChange}/>
      <button onClick={onClick}>ADD</button>
    </>
  );
}

export default IterationSample;