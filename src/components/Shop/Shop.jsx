import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import {addToDb, deleteShoppingCart, getShoppingCart} from '../../utilities/fakedb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCreditCardAlt } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
import { Link } from 'react-router-dom';
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
        let newCart = [];
        // const newCart = [...cartProducts, product];

        const exists = cartProducts.find(pd => pd.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cartProducts, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cartProducts.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exists]
        }
        setCartProducts(newCart);
        addToDb(product.id);
        
    }

    const handleClearShoppingCart =()=> {
        setCartProducts([])
        deleteShoppingCart()

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
                <Cart handleClearShoppingCart={handleClearShoppingCart} cartProducts={cartProducts}>
               <button className='money'><Link to='/orders'>Go to Cart<FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon></Link></button>
                    
               </Cart>
            </div>
        </div>
    );
};

export default Shop;