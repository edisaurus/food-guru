import React from 'react';
// import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Carousel from 'react-bootstrap/Carousel';

export default function Suggestion(props) {
    // const [index, setIndex] = useState(0);
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // }
    const list = props.recipes;
    const base = props.base;

    return (
        <div id="suggestion">
            <h4>Suggestions</h4>
            <ul>{list.map(item => (
                <li key={item.id} className="item">
                <Row>
                    <Col xs={5} md={4} className="image">
                        <Image src={base + item.image} thumbnail />
                    </Col>
                    <Col className="description">
                        <a href={item.sourceUrl} >
                            {item.title}
                        </a>
                    </Col>
                </Row>
                </li> 
        ))}</ul>  
        </div>
    )
}