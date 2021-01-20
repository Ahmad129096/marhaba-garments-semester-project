import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import {useStateValue} from './StateProvider'
import ProductCart from './ProductCart'
function Checkout(){

    const [{basket}] = useStateValue();

    return(
        <div className = "checkout">
            <div className = "checkout_left">
            {
                basket.length === 0 ? (
                    <div>
                <h2 className = "checkout_title">
                    Your shopping cart in empty
                </h2>
                <p>You have no item in your cart. buy now</p>
                </div>
                ) : (
                    <div>
                        <h2  className ="Baskettitle">Items in Basket</h2>
                        {
                            basket.map(item => (
                                <ProductCart
                                id= {item.id}
                                name= {item.name}
                                oldprice= {item.oldprice}
                                price= {item.price}
                                img= {item.img}
                                status= {item.status}
                                discount= {item.discount}
                                />
                            ))

                        }
                    </div>
                )
                
                
            }
            <div>
                {
                    basket.length > 0 && (
                        <div className = "checkout_right">
                        <Subtotal />
                    </div>
                    )
                }
            </div>
            
           
            </div>
        
        </div>
    )

     
   
}
export default Checkout