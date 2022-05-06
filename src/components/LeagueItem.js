import React from 'react';
import { Card } from 'react-bootstrap';

export default function LeagueItem({ league }) {
  return (
    <Card className="league-card">
      <div className="logo-container">
        <Card.Img variant="top" src={league.logo} />
      </div>
      <Card.Title>{league.league}</Card.Title>
      <Card.Subtitle>{'Founded: ' + league.founded}</Card.Subtitle>
      <Card.Subtitle>{'Teams: ' + league.teams}</Card.Subtitle>
      <Card.Subtitle>{'Revenue: ' + league.revenue}</Card.Subtitle>
    </Card>
  );
}
