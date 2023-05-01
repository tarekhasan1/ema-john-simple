import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider"

const Header = () => {

  const {user, logOut} = useContext(AuthContext);
  console.log(user);

  const handleLogout = () =>{
    logOut()
    .then(result=>{})
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && <span> Welcome <span className="signed-mail"> {user.email}</span> <button onClick={handleLogout}>Sign Out</button></span>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
