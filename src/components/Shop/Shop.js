import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToLocatStorage, getStoredCart, removeFromLocalStorage } from '../../utilities/fakedb2';
import Cart from '../Cart/Cart';
import Product from '../Product-card/Product';
import './Shop.css';
import { useHistory } from 'react-router';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [displaydProducts, setDisplayProducts] = useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(response => response.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        });
    }, []);
    useEffect(()=>{
        const savedCart = getStoredCart ();
        const storedCart = []
        if(products.length > 0){
        for (const key in savedCart){
            const addedProduct = products.find(product => product.key === key)
            if(addedProduct){
                addedProduct.quantity = savedCart[key]
                storedCart.push(addedProduct)
            }
        }
        }
        setCart(storedCart)
    },[products]);
    const handleAddToCart = (product) => {
        let newCart = [];
        const exist = cart.find(pd=> pd.key === product.key)
        if(exist){
            const notMatchedProducts = cart.filter(pd => pd.key !== product.key)
            exist.quantity = exist.quantity + 1;
            newCart = [...notMatchedProducts,product]
        }
        else{
            product.quantity = 1;
            newCart = [...cart,product]
        }
        setCart(newCart)
        addToLocatStorage(product.key)
    };
    const handleRemoveFromCart = (product) =>{
        removeFromLocalStorage(product.key)
    };
    const handleSearch = (event) =>{
       const searchtext = event.target.value;
       const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchtext.toLowerCase()));
       setDisplayProducts(matchedProduct)
    };
    const history = useHistory()
    const orderReview = () => {
        history.push('/orders')
    }
    return (
        <div>
            <div className="search-container">
                <input
                onChange={handleSearch}
                type="text"
                placeholder='type here to search' />
                {<FontAwesomeIcon icon={faShoppingCart} />}
            </div>
            <div className='shop-container'>
            <div className="product-container">
                {
                    displaydProducts.map(product => {
                        const {key} = product
                        return <Product
                            key={key}
                            product={product}
                            handleAddToCart= {handleAddToCart}
                            handleRemoveFromCart={handleRemoveFromCart}>
                        </Product>
                    })
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <div className="text-center">
                        <button onClick={orderReview} className="btn btn-warning button">Review your order </button>
                    </div>
                </Cart>
            </div>
            
        </div>
        </div>
    );
};

export default Shop;