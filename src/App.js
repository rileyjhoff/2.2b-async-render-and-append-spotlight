import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvsList from './components/AvsList';
import { getAvs, getDogs, getRpg } from './services/fetch-utils';
import DogList from './components/DogList';
import RPGList from './components/RPGList';

function App() {
  const [avsData, setAvsData] = useState([]);
  const [dogsData, setDogsData] = useState([]);
  const [rpgData, setRpgData] = useState([]);

  useEffect(async () => {
    const avs = await getAvs();
    setAvsData(avs);
  }, []);

  useEffect(async () => {
    const dogs = await getDogs();
    setDogsData(dogs);
  }, []);

  useEffect(async () => {
    const rpg = await getRpg();
    setRpgData(rpg);
  }, []);

  return (
    <div className="App">
      <AvsList players={avsData} />
      <DogList dogs={dogsData} />
      <RPGList classes={rpgData} />
    </div>
  );
}

export default App;
