import React, {Component, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nabar.css'
import {useStateValue} from '../../StateProvider'
import {Link}  from 'react-router-dom'
import {auth} from '../../Firebase'


  function Webserviceone() {
    

   
    const [{basket,loggedinuser}, dispatch] = useStateValue();
    console.log("My Basket",basket);
    
    const logoutUser =() =>
    {
      if(loggedinuser){
        auth.signOut();
      }
    }
     
      return (
      
       < Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" className = "logosize"><img src ="./logo11.png" width ="50px"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="MEN" id="collasible-nav-dropdown">
              <NavDropdown.Item href ="/Men/Hoods">Hoods</NavDropdown.Item>
              <NavDropdown.Item href="/Men/Trousers">Trousers</NavDropdown.Item>
              <NavDropdown.Item href="/Men/Track-Suits">Track Suits</NavDropdown.Item>
              <NavDropdown.Item href="/Men/Sweats">Sweats</NavDropdown.Item>
             </NavDropdown>
            <NavDropdown title="KIDS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hoods</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Trousers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Track suits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jumpers</NavDropdown.Item>
          </NavDropdown>
          </Nav>
          <Nav>
       
            <Nav.Link >
           
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="form-inline ml-auto">
            <div class="md-form my-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                

             
            </div>
            </form>
            </div>

            </Nav.Link>
            
           <Link to ="/checkout">
           <div className ="basket" >
           <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
         
              <span className ="basketcount">
               {basket.length}
              </span>
            </div>
            
           </Link>
         
          <Link to ={!loggedinuser && "/login"}>
          <div className ="sign-in" onClick = {logoutUser}>
              <a>Hello, {loggedinuser?.email}</a>
               <a href =""> {loggedinuser ? "Sign Out" : "Sign In"} </a>
              </div>    
              </Link>
             
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    );
  }
  

export default Webserviceone;