import React from 'react';
import AvsItem from './AvsItem';

export default function AvsList({ players }) {
  return (
    <div className="avs-list">
      {players.map((player, i) => (
        <AvsItem key={player + i} player={player} />
      ))}
    </div>
  );
}
