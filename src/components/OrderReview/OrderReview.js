import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromLocalStorage } from '../../utilities/fakedb2';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemoveItem = (key) => {
        const remainingProducts = cart.filter(product => product.key !== key);
        setCart(remainingProducts);
        removeFromLocalStorage(key);
    };

    const history = useHistory()
    const handleProceedToShipping = () => {
        history.push('/shipping');
        // setCart([]);
        // clearTheCart();
    };

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem key={product.key} handleRemoveItem={handleRemoveItem} product={product}></ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <div className="text-center">
                        <button onClick={handleProceedToShipping} className='btn btn-warning button'> Proceed to Shipping </button>
                    </div>
                </Cart></div>
        </div>
    );
};

export default OrderReview;