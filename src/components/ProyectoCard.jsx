import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

export const ProyectoCard = ({ titulo, descripcion, imagen, tecnologias, url }) => (
  <Card className="h-100 shadow-sm">
    <Card.Img variant="top" src={imagen} alt={`Captura de pantalla de ${titulo}`} />
    <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text>{descripcion}</Card.Text>
      <div className="mb-3">
        {tecnologias.map((tech, index) => (
          <Badge bg="primary" className="me-1" key={index}>{tech}</Badge>
        ))}
      </div>
      <Button variant="outline-primary" href={url} target="_blank">Ver Proyecto</Button>
    </Card.Body>
  </Card>
);