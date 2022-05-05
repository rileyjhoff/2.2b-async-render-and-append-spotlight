import React from 'react';
import { Card } from 'react-bootstrap';

export default function AvsItem({ player }) {
  return (
    <div className="avs-card">
      <Card>
        <Card.Img variant="top" src={player.headshot} />
        <Card.Title></Card.Title>
      </Card>
    </div>
  );
}
