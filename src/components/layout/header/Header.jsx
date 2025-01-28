import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/v1/users/logout")
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="/ks_logo.png" alt="logo" height="50px" />
          </Link>
        </div>
        <div className="searchBar">
          <form action="">
            <input type="search" name="" id="" />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="user-cart-icon">
          <div className="user-icon">
            <Link to="/signup">
              <img src="/user_icon.png" alt="user_icon" width="40px" />
            </Link>
            <Link to="/login">Login</Link>
            <Link to="#" onClick={() => handleLogout}>
              Logout
            </Link>
            <Link to="/profile">profile</Link>
          </div>
          <div className="cart-icon">
            <img src="/cart_icon.jpg" alt="" width="40px" height="40px" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
