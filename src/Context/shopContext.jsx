import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../pages/Product';

export const shopContext = createContext();


const defaultCart = () =>{
    let cart = {};
    for (let i =1;  i< PRODUCTS.length + 1; i++) { 
        cart[i] = 0;    
    }
    return cart;
}
export const ShopContextprovider = (props) =>{
    const [cartItems, setCartItems] = useState(defaultCart);

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] = itemInfo.Price;
            }
        }

        return totalAmount
    }

    const addToCart = (itemId) =>{
        setCartItems((prev => ({...prev, [itemId]: prev[itemId] + 1})))
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev => ({...prev, [itemId]: prev[itemId] - 1})))
    }

    const updateCartItemCount = (newAmount, itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}


    console.log(cartItems)
    return <div>
        <shopContext.Provider value={contextValue} >
            {props.children}
        </shopContext.Provider>
    </div>
}