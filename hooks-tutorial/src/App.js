import { useState } from 'react';
import Info from './Info';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => {setVisible(!visible)}}
      >
        {visible ? 'hide' : 'show'}
      </button>
      {visible && <Info />}
    </div>
  );
}

export default App;
