import { useContext } from 'react';
import MyContext from './context';

const Child = () => {
  const { state } = useContext(MyContext);

  return (
    <>
      <p
        style={{
          color: state.color,
          fontSize: state.fontSize
        }}
      >
        Child Example
      </p>
    </>
  );
}

export default Child;