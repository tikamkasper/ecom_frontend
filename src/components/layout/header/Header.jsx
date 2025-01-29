import axios from "axios";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .get("http://localhost:8000/api/v1/users/logout", {
        withCredentials: true,
        credentials: "include",
      })
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

            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="cart-icon">
            <img src="/cart_icon.png" alt="" width="40px" height="40px" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
