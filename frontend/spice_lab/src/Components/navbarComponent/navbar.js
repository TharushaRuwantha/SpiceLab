import { useState } from "react";
import "./navbar.css";

import logo from "../../images/logo.png"
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#4D1003" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img className="navbarimg" src={logo}/>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link linktxt" href="#">
                <b className="wordspadding">Home</b>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link linktxt" href="#">
              <b className="wordspadding">About</b>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link linktxt" href="#">
              <b className="wordspadding">Products</b>
              </a>
            </li>

            <li className="nav-item ">
              <a className="nav-link linktxt" href="#">
              <b className="wordspadding">Contact Us</b>
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2 searchbar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            
          </form>
          <div className="iconbell"> <NotificationsIcon/></div>
         <div className="iconcart">
         <ShoppingCartIcon/>
         </div>
         
          
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
