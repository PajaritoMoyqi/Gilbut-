import './App.css';
import NotToDoTemplate from './components/NotToDoTemplate';
import NotToDoInsert from './components/NotToDoInsert';

function App() {
  return (
    <NotToDoTemplate>
      <NotToDoInsert />
    </NotToDoTemplate>
  );
}

export default App;
