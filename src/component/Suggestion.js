import React from 'react';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';

export default function Suggestion(props) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    const list = props.recipes;
    const base = props.base;

    return (
        <div id="suggestion">
            <h4>Suggestions</h4>
            <hr />
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {list.map(item => (
                <Carousel.Item key={item.id}>
                  <a href={item.sourceUrl}>{item.title}</a>
                  <br />
                  <br />
                  <Image className="d-block w-100 food-image"
                  src={base + item.image}
                  alt={item.title}
                  fluid
                  />
                </Carousel.Item>
              ))}
            </Carousel>
        </div>
    )
}