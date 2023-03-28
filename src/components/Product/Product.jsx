import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (prop) => {

    console.log(prop)
    
    const { img, name, seller, ratings, price } = prop.product
    const handleAddToCart = prop.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h4 className='product-name'>{name}</h4>
            <p>${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating: {ratings} starts</p>
            </div>
            <button onClick={()=>handleAddToCart(prop.product)} className="btn-cart">Add to Cart<FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
    );
};
export default Product;