import React from 'react';

const Cart = (props) => {
    // const total = props.cart.reduce((previous,current)=>{
    //     return (previous+(current.price));
    // },0);
    const shipping = props.cart.reduce((previous,current)=>{
        return (previous+current.shipping);
    },0);
    let total = 0;
    let totalQuantity = 0
    for (const product of props.cart){
        if(!product.quantity){
            product.quantity = 1
        }
        total = total + product.price*product.quantity;
        totalQuantity = totalQuantity + product.quantity
    };
    // const shipping = total > 0 ? 15:0;
    return (
        <div>
            <div className="text-center">
                <h5>Order Summery </h5>
                <p>Items ordered : {totalQuantity} </p>
                </div>
                <p><small>items : $ {total.toFixed(2)}</small></p>
                <p><small>Shipping and Handling : ${shipping.toFixed(2)} </small></p>
                <p><small>Total before tax : ${(total+shipping).toFixed(2)}</small></p>
                <p><small>Estimated Tax :${((total+shipping)*0.10).toFixed(2)} </small></p>
                <h6>Order Total $ {((total+shipping)+(total+shipping)*0.10).toFixed(2)}</h6>
                    
                    {
                        props.children
                    }
        </div>
    );
};

export default Cart;