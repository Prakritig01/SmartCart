import logo from "./../Assests/nav_bar/logo.png";
import whatsapp_logo from "./../Assests/footer/whatsapp_icon.png";
import instagram_logo from "./../Assests/footer/instagram_icon.png";
import pinterest_icon from "./../Assests/footer/pinterest_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <p className="logo-heading">Smart Cart</p>
        </div>

        <div className="links">
          <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="icons-div">
          <img src={instagram_logo} alt="logo" className="icons" />
          <img src={pinterest_icon} alt="logo" className="icons" />
          <img src={whatsapp_logo} alt="logo" className="icons" />
        </div>

        <div className="copyright">
          <hr />
          <p className="copyright-para">
            © 2023 by Smart Cart. All Rights Reserved. Proudly created by MIT
            Students
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
