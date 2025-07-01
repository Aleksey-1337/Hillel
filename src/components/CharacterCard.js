import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CharacterCard({ name, birthYear, gender }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Birth Year: {birthYear}</Card.Text>
        <Card.Text>Gender: {gender}</Card.Text>
        <Button variant="primary" disabled>Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
