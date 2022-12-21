import { useState, useCallback } from 'react';
import NewsList from './NewsList';
import Categories from './Categories';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  )
}

export default App;
