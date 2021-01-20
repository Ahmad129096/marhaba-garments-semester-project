import React from 'react'
import './Hoods.css'
import {useStateValue} from '../../StateProvider'

function Product({id, name, oldprice, price, img, status, discount}){
    const [{basket}, dispatch] = useStateValue();
    console.log('Basket Content', basket);
const addToBasket = () => {
    
    dispatch({
        type: 'ADD_TO_BASKET',
    item: {
        id: id,
        name: name,
        oldprice: oldprice,
        price: price,
        img: img,
        status: status,
        discount: discount
    }
    })
}
    return(
        <div className ="disp">
    <div class="row" >
        <div class="col-md-3 col-sm-6" id ={id}>
            <div class="product-grid4">
                <div class="product-image4">
                    <a href="#">
                        <img class="pic-1" src={img}></img>
                   </a>
                    <ul class="social">
                        <li><a href="#" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                        <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span class="product-new-label">{status}</span>
                    <span class="product-discount-label">{discount}</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">{name}</a></h3>
                    <div class="price">
                        {price} PKR
                        <span>{oldprice}</span>
                    </div>
                    <a class="add-to-cart"
                    onClick = {addToBasket}>
                    ADD TO CART</a>
                </div>
            </div>
        </div>
    </div>
    </div>
   )
};

export default Product;