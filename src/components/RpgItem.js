import React from 'react';
import { Card } from 'react-bootstrap';

export default function RpgItem({ rpg }) {
  return (
    <Card className="rpg-card">
      <Card.Img variant="top" src={rpg.img} />
      <Card.Title>{rpg.class}</Card.Title>
      <h5>Specializations:</h5>
      {rpg.specialization.map((specialization, i) => (
        <Card.Subtitle key={specialization + i}>{specialization}</Card.Subtitle>
      ))}
      <h5>Roles:</h5>
      {rpg.role.map((role, i) => (
        <Card.Subtitle key={role + i}>{role}</Card.Subtitle>
      ))}
    </Card>
  );
}
