import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvsList from './components/AvsList';
import { getAvs, getDogs, getLeagues, getRpg } from './services/fetch-utils';
import DogList from './components/DogList';
import RpgList from './components/RpgList';
import LeagueList from './components/LeagueList';

function App() {
  const [avsData, setAvsData] = useState([]);
  const [dogsData, setDogsData] = useState([]);
  const [rpgData, setRpgData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);

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

  useEffect(async () => {
    const league = await getLeagues();
    setLeagueData(league);
  }, []);

  return (
    <div className="App">
      <h1>Supabase import and display a list</h1>
      <AvsList players={avsData} />
      <DogList dogs={dogsData} />
      <RpgList classes={rpgData} />
      <LeagueList leagues={leagueData} />
    </div>
  );
}

export default App;
