import { useState, useMemo } from 'react';

const getAverage = numbers => {
  console.log('calculating...');

  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  }
  const onInsert = e => {
    setList([...list, parseInt(number)]);
    setNumber('');
  }

  const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>Submit</button>
      <ul>
        {list.map((val, idx) => <li key={idx}>{val}</li>)}
      </ul>
      <div><b>average:</b> {avg}</div>
    </div>
  )
}

export default Average;