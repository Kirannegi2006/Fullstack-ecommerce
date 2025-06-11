import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const [open, setOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const handleSelect = (key) => {
    setMenu(key);
    setOpen(false);          // auto-close on mobile
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" />
          <p>SHOPPER</p>
        </Link>
      </div>

      {/* Hamburger */}
      <button className="nav-toggle" onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>

      {/* COLLAPSIBLE BLOCK */}
      <div className={`nav-collapse ${open ? "open" : ""}`}>
        <ul className="nav-menu">
          {[
            { path: "/", label: "Shop", key: "shop" },
            { path: "/men", label: "Men", key: "men" },
            { path: "/womens", label: "Women", key: "women" },
            { path: "/kids", label: "Kids", key: "kids" },
          ].map(({ path, label, key }) => (
            <li key={key} onClick={() => handleSelect(key)}>
              <Link to={path}>{label}</Link>
              {menu === key && <hr />}
            </li>
          ))}
        </ul>

        <div className="nav-login-cart">
  <Link to="/register">
    <button onClick={() => setOpen(false)}>Register</button>
  </Link>

  <Link to="/logout">
    <button onClick={() => setOpen(false)}>LogOut</button>
  </Link>

  <Link to="/cart" className="cart-link" onClick={() => setOpen(false)}>
    <img src={cart_icon} alt="cart" />
    <span className="nav-cart-count">{getTotalCartItems()}</span>
  </Link>
</div>

      </div>
    </header>
  );
}
