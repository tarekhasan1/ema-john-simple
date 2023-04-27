import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // const {cart} = props; (we can use destructure)
    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of  cart){
        product.quantity = product.quantity || 1;
        // another way
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        total = total + product.price* product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total*7/100;


    return (
        <div className='cart'>
        <h3>Order Summery</h3>
        <p>Selected Item: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping: ${totalShipping}</p>
        <p>Tax: ${tax}</p>
        <h6>Grand Total: ${(total+totalShipping+tax).toFixed(2)}</h6>
        <button onClick={props.handleClearCart} className='btn-clear-cart'><span>Clear Cart</span><FontAwesomeIcon icon={faTrashAlt} /></button>
        {props.children}
        </div>
    );
};

export default Cart;