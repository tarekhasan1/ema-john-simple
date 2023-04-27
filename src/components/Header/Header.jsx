import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
