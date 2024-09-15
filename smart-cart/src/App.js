import Navbar from "./Components/Navbar/Navbar";
import Men from "./Components/Pages/ShopMen";
import Women from "./Components/Pages/ShopWomen";
import Kids from "./Components/Pages/ShopKids";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import SignIn from "./Components/Pages/SignIn";
import Cart from "./Components/Pages/Cart";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
const App = () => {
  return ( 
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>        
        <Route path="/men" element = {<Men/>}></Route>        
        <Route path="/women" element = {<Women/>}></Route>        
        <Route path="/kids" element = {<Kids/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
        <Route path="/signin" element = {<SignIn/>}></Route>
        <Route path="/cart" element = {<Cart/>}></Route>

      </Routes>
    
    </Router>

   
    </>
   );
}
 
export default App;