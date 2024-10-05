import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/ShopCategory";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assests/banner/banner_men.png";
import women_banner from "./Components/Assests/banner/banner_women.png";
import kids_banner from "./Components/Assests/banner/banner_kid.png";
import "./App.css";
import Login from "./Pages/Login";

<script
  src="https://kit.fontawesome.com/e092ab8587.js"
  crossorigin="anonymous"
></script>;

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* {Here, the category prop can be used to display the collection type (e.g., "Men Collection"), and the banner prop can be used to show the appropriate image for that category. */}
          <Route path="/men" element={<ShopCategory category="Men" banner={men_banner} />}></Route>
          <Route path="/women" element={<ShopCategory category="Women" banner={women_banner} />}></Route>
          <Route path="/kids" element={<ShopCategory category="Kid" banner={kids_banner} />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/login" element = {<Login/>} ></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
