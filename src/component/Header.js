import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Header() {
  return (
    <div id="header" className="center">
      <Row>
        <Col>
          <p>Welcome to Food Guru</p>
        </Col>
        <Col>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          <a href="/Home">Home</a>
        </Col>
      </Row>
      
    </div>
  );
}