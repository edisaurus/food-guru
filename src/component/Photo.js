import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';

export default function Photo() {
  return (
    <div id="food-image" className="center">
      <p>Food Image</p>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" />
        </Col>
    </div>
  );
}