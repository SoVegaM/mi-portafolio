import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export const SobreMi = () => (
  <section id="sobre-mi" className="py-5 bg-light text-center">
    <Container>
      <Image src="https://via.placeholder.com/150" roundedCircle alt="Foto de perfil profesional" className="mb-3" />
      <h2>Pedro</h2>
      <p className="lead">Estudiante de Informática Duoc UC | Entusiasta de la Tecnología</p>
      <p>Bienvenido a mi portafolio personal donde comparto mis proyectos y noticias recientes.</p>
    </Container>
  </section>
);