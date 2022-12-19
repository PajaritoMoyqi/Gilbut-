import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <h1 style={{ color }}>{ message }</h1>
      <button onClick={ onClickEnter }>입장하십니다</button>
      <button onClick={ onClickLeave }>퇴장하십니다</button>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>RED</button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>GREEN</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>BLUE</button>
    </div>
  );
};

export default Say;