import React from 'react';
import DogItem from './DogItem';

export default function DogList({ dogs }) {
  return (
    <div className="dog-list">
      {dogs.map((dog, i) => (
        <DogItem key={dog.breed + i} dog={dog} />
      ))}
    </div>
  );
}
