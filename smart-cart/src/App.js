import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "./App.css";

<script src="https://kit.fontawesome.com/e092ab8587.js" crossorigin="anonymous"></script>

const App = () => {
  return ( 
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>        
        <Route path="/men" element = {<ShopCategory category= "Men"/>}></Route>        
        <Route path="/women" element = {<ShopCategory category= "Women"/>}></Route>        
        <Route path="/kids" element = {<ShopCategory category= "Kids"/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
        <Route path="/signin" element = {<SignIn/>}></Route>
        <Route path="/cart" element = {<Cart/>}></Route>
      </Routes>
      
    <Footer/>
    </Router>

   
    </>
   );
}
 
export default App;