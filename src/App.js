import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvsList from './components/AvsList';
import { getAvs, getDogs } from './services/fetch-utils';
import DogList from './components/DogList';

function App() {
  const [avsData, setAvsData] = useState([]);
  const [dogsData, setDogsData] = useState([]);

  useEffect(async () => {
    const avs = await getAvs();
    setAvsData(avs);
  }, []);

  useEffect(async () => {
    const dogs = await getDogs();
    setDogsData(dogs);
  }, []);

  return (
    <div className="App">
      <AvsList players={avsData} />
      <DogList dogs={dogsData} />
    </div>
  );
}

export default App;
