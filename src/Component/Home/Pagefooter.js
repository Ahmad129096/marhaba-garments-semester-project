import React, {Component} from 'react'
import {Row, Col, Image, Container, Footer} from 'react-bootstrap';
import './Pagefooter.css'
class Pagefooter extends Component {
    constructor(props){
      super(props);
      
    }
  
  
  
  
  
  
    render() {
  
    return(
  
  
        <div>
        <footer className="page-footer">
            <h3>Project By Marhaba Sweets And Bakers</h3>
             <div>© 2020 MARHABA GARMENTS</div> 
        </footer>
    </div>
      );
    }
  }
  
  export default Pagefooter;