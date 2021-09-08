import React from 'react';
import Photo from './Photo';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ingredient from './Ingredient';
import Procedure from './Procedure';

export default function Main(props) {
  return (
    <div id="main-container" className="center">
      <p>Main</p>
      <Row>
          <Col>
            <Photo />
            <Ingredient />
          </Col>
          <Col>
            <Procedure />
          </Col>
      </Row>
      <p>{props.items}</p>
    </div>
  );
}