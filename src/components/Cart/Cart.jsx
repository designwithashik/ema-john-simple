import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Cart = ({ cartProducts, handleClearShoppingCart, children }) => {
    console.log(children)
        const totalShipping = cartProducts.reduce((prev, curr) => prev + curr.shipping, 0)

        const totalQuantity = cartProducts.reduce((prev, curr) => prev + curr.quantity, 0);

    const totalPrice = cartProducts.reduce((prev, curr) => prev + curr.price, 0) * totalQuantity;
    
    
        const tax = totalPrice*7/100 
        const grandTotal = totalPrice + totalShipping + tax
    
    
    // Via er theory
    // let totalPrice = 0;
    // let totalShipping = 0;
    // let quantity = 0;
    // for (const product of cartProducts) {
    //     // if (product.quantity === 0) {
    //     //     product.quantity = 1;
    //     // }

    //     totalPrice = totalPrice + product.price *quantity;
    //     totalShipping = totalShipping + product.shipping;
    //     quantity = quantity + product.quantity;    
    // }

    // const tax = totalPrice * 7 / 100;
    // const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
             <h2>Order summary</h2>
            <p>Selected Items: {totalQuantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <button className='clear' onClick={handleClearShoppingCart}><p>Clear Cart</p> <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></button>
            {children}
        </div>
    );
};

export default Cart;