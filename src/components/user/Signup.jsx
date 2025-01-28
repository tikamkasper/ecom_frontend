import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Signup = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", user);
    axios
      .post("http://localhost:8000/api/v1/users/register", user, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setUser({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <div className="form-container-outer">
        <div className="form-container-inner">
          <h2>Signup Here ...</h2>
          <form onSubmit={handleSubmit}>
            <div className="userName">
              <label htmlFor="_userName">User Name: </label>
              <input
                type="text"
                placeholder="Enter Your User Name"
                name="userName"
                id="_userName"
                value={user.userName}
                onChange={handleInput}
              />
            </div>
            <div className="email">
              <label htmlFor="_email">Email: </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                name="email"
                id="_email"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            <div className="password">
              <label htmlFor="_password">Password: </label>
              <input
                type="text"
                placeholder="Enter Your Password"
                name="password"
                id="_password"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <div className="confirmPassword">
              <label htmlFor="_confirmPassword">Confirm Password: </label>
              <input
                type="text"
                placeholder="Enter Your Confirm Password"
                name="confirmPassword"
                id="_confirmPassword"
                value={user.confirmPassword}
                onChange={handleInput}
              />
            </div>
            <div className="submit_btn">
              <button type="submit">Signup</button>
            </div>
            <div>
              have you already an account?
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
