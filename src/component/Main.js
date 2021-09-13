import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Suggestion from './Suggestion';

export default function Main(props) {
  const list = props.items;
  const uri = props.url;

  return (
    <div id="main-container" className="center">
      <p>Main</p>
      <Row>
        <Col>
          <Suggestion recipes={list} base={uri} />
        </Col>
      </Row>
    </div>
  );
}