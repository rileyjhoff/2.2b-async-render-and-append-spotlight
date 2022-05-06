import React from 'react';
import RpgItem from './RpgItem';

export default function RpgList({ classes }) {
  return (
    <div className="rpg-list">
      {classes.map((rpg, i) => (
        <RpgItem key={rpg.class + i} rpg={rpg} />
      ))}
    </div>
  );
}
