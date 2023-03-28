import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data =>setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product)
        const cart = [...cartProducts, product];
        setCartProducts(cart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product key={product.id}
                        product ={product} handleAddToCart={handleAddToCart}>

                        </Product>
                        )

                }
            </div>
            <div className="cart-container">
                Order summary
                <p>Selected Items: {cartProducts.length}</p>
            </div>
        </div>
    );
};

export default Shop;