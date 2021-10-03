let shopping_cart = {};
const addToLocatStorage = (key) =>{
    const exists = localStorage.getItem('shopping_cart');
    if(!exists){
        shopping_cart[key] = 1;
    }
    else{
        shopping_cart = JSON.parse(exists);
        if(shopping_cart[key]){
            shopping_cart[key] = shopping_cart[key] + 1;
        }
        else{
            shopping_cart[key] = 1;
        }
    }
    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart))
};
const removeFromLocalStorage=(key)=>{
    const exists = localStorage.getItem('shopping_cart');
    if(exists){
        shopping_cart = JSON.parse(exists);
        delete shopping_cart[key]
    }
    localStorage.setItem('shopping_cart',JSON.stringify(shopping_cart))
};
const getStoredCart = () =>{
    const exists = localStorage.getItem('shopping_cart');
    return exists ? JSON.parse(exists) : {}
};
const clearTheCart = () => localStorage.removeItem('shopping_cart')
export {addToLocatStorage,removeFromLocalStorage,getStoredCart,clearTheCart}