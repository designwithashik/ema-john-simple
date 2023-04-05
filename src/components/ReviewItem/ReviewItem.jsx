import React from 'react';
import './ReviewItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { name, id, img, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'
            >
                <h4>{name}</h4>
                <p>Price: <span>${price}</span></p>
                <p>Quantity: <span>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)}><FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></button>
        </div>
    );
};

export default ReviewItem;