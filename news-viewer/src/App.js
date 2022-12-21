import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?language=es&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div><button onClick={onClick}>GET NEWS</button></div>
      { data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly /> }
    </div>
  );
}

export default App;
