import { useContext } from 'react';
import MyContext from './context';

const Child2 = () => {
  const { actions } = useContext(MyContext);

  const handleSetColor = () => {
    actions.setColor('black');
  }
  const handleSetFontSize = () => {
    actions.setFontSize(30);
  }

  return (
    <>
      <button onClick={handleSetColor}>
        color to black
      </button>
      <button onClick={handleSetFontSize}>
        font to 30px
      </button>
    </>
  );
}

export default Child2;