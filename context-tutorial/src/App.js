import { MyProvider } from './context';
import Child from './Child';
import Child2 from './Child2';

const App = () => {
  return (
    <MyProvider>
      <div>
        <Child />
        <Child2 />
      </div>
    </MyProvider>
  );
}

export default App;