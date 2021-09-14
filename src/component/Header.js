import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
  return (
    <div id="header">
      <Row>
        <Col>
          <h2>FoodGuru</h2>
        </Col>
        <Col>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about" eventKey="link-1">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </div>
  );
}