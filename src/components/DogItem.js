import React from 'react';
import { Card } from 'react-bootstrap';

export default function DogItem({ dog }) {
  return (
    <Card className="dog-card">
      <Card.Img variant="top" src={dog.img} />
      <Card.Title>{dog.breed}</Card.Title>
      <Card.Subtitle>{'Lifespan: ' + dog.lifespan}</Card.Subtitle>
      <Card.Subtitle>{'Weight: ' + dog.weight}</Card.Subtitle>
      <Card.Subtitle>{'Breed Group: ' + dog.group}</Card.Subtitle>
    </Card>
  );
}
