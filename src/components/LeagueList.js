import React from 'react';
import LeagueItem from './LeagueItem';

export default function LeagueList({ leagues }) {
  return (
    <div className="league-list">
      {leagues.map((league, i) => (
        <LeagueItem key={league.league + i} league={league} />
      ))}
    </div>
  );
}
