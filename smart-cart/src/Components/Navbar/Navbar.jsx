import logo from "./../Assests/logo.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <Router>
          {/* {to use imported logo } */}
          <img src={logo} alt="Logo"  />
          <h1>SmartCart</h1>
          <Link>Shop All</Link>
          <Link>Shop Men</Link>
          <Link>Shop Women</Link>
          <Link>Shop Kids</Link>
          <Link>Contact Us</Link>
          <button>Login</button>
        </Router>
      </nav>
    </>
  );
};

export default Navbar;
