import React from 'react';
import './Cart.css'
const Cart = ({ cartProducts }) => {
    console.log(cartProducts)
    const totalPrice = cartProducts.reduce((prev, curr)=>prev + curr.price, 0)
    const totalShipping = cartProducts.reduce((prev, curr) => prev + curr.shipping, 0)
    const tax = totalPrice*7/100
    const grandTotal = totalPrice + totalShipping + tax
    return (
        <div className='cart'>
             <h2>Order summary</h2>
            <p>Selected Items: {cartProducts.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;