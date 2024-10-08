import { createContext,useState } from "react";
import all_products from "../Components/Assests/all_products";

const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    return cart;
}


 const ShopContextProvider = ({children}) =>{
    const products = {all_products};
    const [cart,setCart] = useState(getDefaultCart());

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

