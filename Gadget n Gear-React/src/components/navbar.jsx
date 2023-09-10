import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (

    
    <nav className="nav">
    <nav className="navbar">
    <a href="/" className="site-title">
    Gadget N Gear</a>
    
    
    <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={20} />
        </Link>
        </nav>
  </nav>
    
  
  );
};