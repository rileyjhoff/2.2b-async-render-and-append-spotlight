import React from 'react';
import { Card } from 'react-bootstrap';

export default function AvsItem({ player }) {
  return (
    <Card className="avs-card">
      <Card.Img variant="top" src={player.headshot} />
      <Card.Title>{player.name}</Card.Title>
      <Card.Subtitle>{'#' + player.number}</Card.Subtitle>
      <Card.Subtitle>{'Age: ' + player.age}</Card.Subtitle>
      <Card.Subtitle>{'Position: ' + player.position}</Card.Subtitle>
    </Card>
  );
}
