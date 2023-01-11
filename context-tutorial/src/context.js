import { createContext, useState } from 'react';

const MyContext = createContext({
  state: {color: 'red', fontSize: 20},
  actions: {
    setColor: () => {},
    setFontSize: () => {}
  }
});

const MyProvider = ({ children }) => {
  const [color, setColor] = useState('red');
  const [fontSize, setFontSize] = useState(20);

  const value = {
    state: { color, fontSize },
    actions: { setColor, setFontSize }
  };

  return (
    <MyContext.Provider value={value}>{children}</MyContext.Provider>
  );
}

const { Consumer: MyConsumer } = MyContext; // const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };

export default MyContext;