import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const {img,name,seller,price,stock,star,features} = props.product;
    return (
        <div className='product-card'>
            <figure>
                <img src={img} alt= "" />
            </figure>
            <div className="product-details">
                <div className="product-title">
                    <h6> {name}</h6>
                </div>
                <div className="product-info">
                    <div className="left-side-info">
                        <p><small> by: {seller}</small></p>
                        <p>${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <div style={{display:'flex'}}>
                        <button onClick={()=>props.handleAddToCart(props.product)} className="btn btn-warning add-cart-btn"> {<FontAwesomeIcon icon={faShoppingCart} />} Add to cart </button>
                        <button onClick={()=>props.handleRemoveFromCart(props.product)} className="btn btn-warning add-cart-btn"> {<FontAwesomeIcon icon={faShoppingCart} />} Remove from Cart </button>
                        </div>
                    </div>
                    <div className="right-side-info">
                        <p>Rating : {star} </p>
                        <p><b>Features</b> </p>
                        <ul>
                            {
                                features.map((feature,index) =>{
                                        return <li key={index}> {feature.description} : {feature.value} </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;