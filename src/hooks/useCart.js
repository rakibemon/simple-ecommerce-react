import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb2"

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const savedCartToUI = [];
            for (const key in savedCart) {
                const addedProducts = products.find(product => product.key === key)
                if (addedProducts) {
                    const quantity = savedCart[key];
                    addedProducts.quantity = quantity
                    savedCartToUI.push(addedProducts)
                }
            }
            setCart(savedCartToUI)
        }

    }, [products]);
    return [cart,setCart]

};
export default useCart;