import { createContext,useEffect,useState } from "react";
import all_products from "../Components/Assests/all_products";

const ShopContext = createContext(null);

const getDefaultCart = () =>{
    const cart = localStorage.getItem('cart');
    if (!cart) {
        return {}; // Return an empty object if no cart exists
    }
    
    try {
        return JSON.parse(cart); // Attempt to parse the cart
    } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
        return {}; // Return an empty object on error
    }
} 


 const ShopContextProvider = ({children}) =>{
    const products = {all_products};
    const [cart,setCart] = useState(getDefaultCart());


    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);

    const addProductToCart = (productId) =>{
        console.log("Product id in shopcontext", productId);
        setCart((prevCart =>{
            return {
                ...prevCart , [productId] : (prevCart[productId] || 0) +1
            }
        }))
    }

    const removeProductFromCart = (productId) =>{
        setCart((prevCart =>{
            if(!prevCart[productId]){
                return prevCart;
            }


            //if the quantity is 1 remove that product from the cart
            if(prevCart[productId] === 1){
                const newCart = {...prevCart};
                delete newCart[productId];
                return newCart;
            }

            //otherwise decrease the quantity by 1
            return {...prevCart,[productId] : (prevCart[productId] -1)};
        }))
    }

    const contextValue = {all_products,cart,addProductToCart,removeProductFromCart}
    return(
        <ShopContext.Provider value={contextValue} >
            {children }
        </ShopContext.Provider>
    )
}

export  {ShopContextProvider,ShopContext};

