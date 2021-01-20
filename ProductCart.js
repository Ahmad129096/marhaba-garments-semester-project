import React from 'react'
import './ProductCart.css'
import {useStateValue} from './StateProvider'

function ProductCart({id, name, oldprice, price, img, status, discount}) {
    
    const [{basket}, dispatch] = useStateValue();
    
    const removeItem = () =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id

        })
    }

    return(
        <div className = "productcart">
            <img className ="productcart_img" src ={img} alt ="" />
            <div className ="productcart_info">
            <p className ="productcart_name">{name}</p>
            <p className ="productcart_oldprice">{oldprice}</p>
            <p className ="productcart_price">{price} PKR</p>
            <p className ="productcart_disc">{discount}</p>
            <button onClick ={removeItem}>Remove From Basket</button>
            </div>
            
          
        </div>
    )
}

export default ProductCart;