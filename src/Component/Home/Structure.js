import React, {Component} from 'react'
import {Row, Col, Image, Container, Button, Carousel, Table, Card, CardGroup,Media} from 'react-bootstrap';




   
        
        // this.state = {
        //     Name : 'Sweat Shirt',
        //   Price : 345

        //   };
   function Structure(){
        
        return(
            <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./Shoes1.jpg"
                alt="First slide"
                width = "600px"
                height = "600px"
       
                />
                <Carousel.Caption>
                <h3>K-Swiss Sports Shoes</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 "
                src="./Shoes2.jpg"
                alt="Third slide"
                width = "600px"
                height = "600px"
                />

                <Carousel.Caption>
                <h3>K-Swiss Sports Shoes</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-20"
                src="./Shoes3.jpg"
                alt="Third slide"
                width = "600px"
                height = "600px"
                />

                <Carousel.Caption>
                <h3>K-Swiss Sports Shoes</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            <CardGroup>
  <Card >
    <Card.Img variant="top" src="KidSweats1.jpeg" />
    <Card.Body>
      Kid Sweat<hr></hr>
      <Button>BUY NOW</Button>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="KidSweats1.jpeg" />
    <Card.Body>
    Kid Sweat<hr></hr>
      <Button>BUY NOW</Button>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="KidSweats1.jpeg" />
    <Card.Body>
    Kid Sweat<hr></hr>
      <Button>BUY NOW</Button>
    </Card.Body>
    
  </Card>
</CardGroup>
            <Table hover size="sm">
  <tbody>
    <tr>
      <td><Image src="./Sweatshang.jpg" rounded /></td>
      <td>
          <h1>
             MEN SWEATS 
          </h1>
      <h3>
                        Hello Sandy Hello Sandy Hello Sandy Hello Sandy Hello Sandy Hello Sandy
                        Hello Sandy Hello Sandy Hello Sandy Hello Sandy Hello Sandy Hello Sandy 
                        Hello Sandy Hello SandyHello SandyHello SandyHello Sandy Hello Sandy
      </h3>
     <Button href = "/Men/Sweats">BUY NOW</Button> 
      </td>
    </tr>
    
  </tbody>
</Table>
        </div>
        );
    }
          
        






export default Structure;