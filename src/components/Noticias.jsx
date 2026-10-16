import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import noticiasData from '../data/noticias.json';

export const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Carga de datos dinámicos
    setNoticias(noticiasData);
  }, []);

  return (
    <section id="noticias" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4 text-center">Últimas Noticias</h2>
        <Row>
          {noticias.map((item) => (
            <Col md={6} key={item.id} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{item.titulo}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.fecha}</Card.Subtitle>
                  <Card.Text>{item.contenido}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};