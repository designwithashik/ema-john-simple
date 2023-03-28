import React from 'react';
import './Product.css'
const Product = (prop) => {
    console.log(prop)
    const {img, name, seller, ratings, price} = prop.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h4 className='product-name'>{name}</h4>
            <p>${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating: {ratings} starts</p>
            </div>
            <button className="btn-cart">Add to Cart</button>
        </div>
    );
};
export default Product;