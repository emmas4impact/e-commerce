import React, {createContext, useContext,useState, useEffect, Children} from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext =({children})=>{
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] =useState();
    const [totalPrice, setTotalPrice] =useState();
    const [totalQuantites, setTotalQuantities]= useState();
    const [qty, setQty]= useState(1);

    const incQty = ()=>{
        setQty((preQty) => preQty + 1);
    }
    
    
    const decQty = ()=>{
        setQty((preQty) => {
        if(preQty - 1 < 1) return 1;
        
        return preQty - 1;
    });
    }
    
    return(
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantites,
            qty,
            incQty,
            decQty

        }}>
          
           {children} 
        </Context.Provider>
    )
}