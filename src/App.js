import { useEffect, useState } from 'react';
import './App.css';
import { getAvs } from './services/fetch-utils';

function App() {
  const [avsData, setAvsData] = useState([]);

  useEffect(async () => {
    const avs = await getAvs();
    setAvsData(avs);
  }, []);

  return <div className="App"></div>;
}

export default App;
