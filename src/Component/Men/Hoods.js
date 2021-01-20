import React, {Component} from 'react'


import {Row, Col, Image, Container, Button, Carousel, Table} from 'react-bootstrap';
import './Hoods.css'
import Product from './Product'



function Hoods() {

  return(
    <div>
      <Product
       id = "1"
       name = "Tommy Hoody"
       img = "http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg"
       price = "300"
         status = "NEW"
         discount= "-10%"
         />
         <Product
       id = "2"
       name = "Tommy Hoody"
       img = "http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg"
       price = "300"
         status = "NEW"
         discount= "-10%"
         />
         <Product
       id = "3"
       name = "Tommy Hoody"
       img = "http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg"
       price = "300"
         status = "NEW"
         discount= "-10%"
         />
          <Product
       id = "1"
       name = "Tommy Hoody"
       img = "http://bestjquery.com/tutorial/product-grid/demo5/images/img-1.jpg"
       price = "300"
         status = "NEW"
         discount= "-10%"
         />
    </div>
  )
  
}
  

  export default Hoods;