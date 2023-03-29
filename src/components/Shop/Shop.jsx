import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, getShoppingCart} from '../../utilities/fakedb'

import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        let savedCart = []
        // step 1 get id of the addedProduct;
        for (const id in storedCart) {
            //get product from products state by using id
            const storedProduct = products.find(product => product.id === id)
            if (storedProduct) {
                // add quantity
                const quantity = storedCart[id]
                storedProduct.quantity = quantity;
                // add the product to an array
                console.log('Stored',storedProduct)
                savedCart.push(storedProduct)
            }
        }
        setCartProducts(savedCart)
    }, [products])
    

    const handleAddToCart = (product) => {
        // console.log(product)
        const cart = [...cartProducts, product];
        setCartProducts(cart);
        addToDb(product.id);
        
    }
    // console.log(products)
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
               <Cart  cartProducts={cartProducts}></Cart>
            </div>
        </div>
    );
};

export default Shop;