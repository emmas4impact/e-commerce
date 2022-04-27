import React, {createContext, useContext,useState, useEffect, Children} from 'react';
import {toast} from 'react-hot-toast';

const Context = createContext();

export const StateContext =({children})=>{
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] =useState([]);
    const [totalPrice, setTotalPrice] =useState();
    const [totalQuantities, setTotalQuantities]= useState(0);
    const [qty, setQty]= useState(1);

    const onAdd =(product, quantity) =>{
        const checkProductInCart = cartItems.find((item)=>item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if(checkProductInCart){

            const updateCartItems = cartItems.map((cartProduct) =>{
                if(cartProduct._id === product._id) return{
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            setCartItems(updateCartItems);
            
        }else{
            product.quantity = quantity;
            
            setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart.`)
    }

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
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd

        }}>
          
           {children} 
        </Context.Provider>
    )
}
export const useStateContext= ()=>useContext(Context);