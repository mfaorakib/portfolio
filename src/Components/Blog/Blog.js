import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import "./Blog.scss"

const Blog = () => {
    return (
      <div className="header-text">
        <h1>Blog</h1>
<CardGroup>
  <Card  className='card'>
    <Card.Img className="img" variant="top" src="https://i.ibb.co/N1TRfc0/1-ffn-8-KUw-Jzhc-Du-QP5a4oow.jpg"  alt="Snowy Mountains"/>
    <Card.Body>
      <Card.Title>Basic JavaScript</Card.Title>
      <Card.Text>
                 Array is a data structure that contains a group of elements. JS arrays can contain...
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <a href="http://mfaorakib.medium.com/basic-javascript-b99119bd67d0"  target="_blank">
    <Button> Explore</Button>
    </a>
    </Card.Footer>
  </Card >
  <Card  className='card'>
    <Card.Img className="img" variant="top" src="https://i.ibb.co/pfC3F9S/1-C4u-EKBan-ML9-Q8q5-4-HV3-Q.jpg" />
    <Card.Body>
      <Card.Title>Slice() in JS</Card.Title>
      <Card.Text>
      lice() method will return a copy of a portion of an array into a new array, depending on the start and the end
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <a href="https://mfaorakib.medium.com/slice-in-js-17aa267c3116"  target="_blank"> <Button>Explore</Button></a>
      
    </Card.Footer>
  </Card>
  <Card  className='card'>
    <Card.Img className="img" variant="top" src="https://i.ibb.co/98K1N4m/cover-a1d5b40.png" />
    <Card.Body>
      <Card.Title>React JS</Card.Title>
      <Card.Text>
      ou know , there are a lots of library around us. Which is made with different types of books. Yeah, React is a JavaScript library Which is used in web development to build interactive elements on websites.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <a href="https://mfaorakib.medium.com/react-js-ed8d53b22b64" target="_blank"><Button className="btn">Explore</Button></a>
    
    </Card.Footer>
  </Card>
</CardGroup>
</div>
    );
};

export default Blog;