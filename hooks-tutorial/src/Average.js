import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('calculating...');

  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(() => {
    setList([...list, parseInt(number)]);
    setNumber('');
    inputEl.current.focus();
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>Submit</button>
      <ul>
        {list.map((val, idx) => <li key={idx}>{val}</li>)}
      </ul>
      <div><b>average:</b> {avg}</div>
    </div>
  )
}

export default Average;