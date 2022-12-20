import './App.css';
import NotToDoTemplate from './components/NotToDoTemplate';
import NotToDoInsert from './components/NotToDoInsert';
import NotToDoList from './components/NotToDoList';

function App() {
  return (
    <NotToDoTemplate>
      <NotToDoInsert />
      <NotToDoList />
    </NotToDoTemplate>
  );
}

export default App;
