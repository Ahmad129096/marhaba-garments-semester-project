import React, {Component} from 'react'
import {Row, Col, Image, Container, Button, Carousel, Table} from 'react-bootstrap';




class Trousers extends Component {
    constructor(props){
      super(props);
      
      this.state = {
            error: null,
            isLoaded: false,
            items: [],
            flag:0
          };
    }
  
  
  
  
  
  
    render() {
  
    return(
  
  
      <div>

        <h1>Trouserer is working</h1>

      
  
        
  
      </div>
      );
    }
  }
  
  export default Trousers;