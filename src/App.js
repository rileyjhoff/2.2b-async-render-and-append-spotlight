import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvsList from './components/AvsList';
import { getAvs } from './services/fetch-utils';

function App() {
  const [avsData, setAvsData] = useState([]);

  useEffect(async () => {
    const avs = await getAvs();
    setAvsData(avs);
  }, []);

  return (
    <div className="App">
      <AvsList players={avsData} />
    </div>
  );
}

export default App;
