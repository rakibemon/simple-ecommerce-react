import React from 'react';

const ReviewItem = (props) => {
    const {img,name,quantity,key} = props.product
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <h5>Quantrity : {quantity}</h5>
                <button onClick={()=>props.handleRemoveItem(key)} className='btn btn-warning add-cart-btn'> Remove </button>
            </div>
        </div>
    );
};

export default ReviewItem;