import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    userNameOrEmail: "",
    password: "",
  });

  const handleInput = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("loginInput", loginInput);
    axios
      .post("http://localhost:8000/api/v1/users/login", loginInput, {
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-container-outer">
      <div className="form-container-inner">
        <h2>Login Here ...</h2>
        <form onSubmit={handleSubmit}>
          <div className="userNameorEmail">
            <label htmlFor="_userNameorEmail">User Name or Email: </label>
            <input
              type="text"
              placeholder="Enter username/email"
              name="userNameOrEmail"
              id="_userNameOrEmail"
              value={loginInput.userNameOrEmail}
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
              value={loginInput.password}
              onChange={handleInput}
            />
          </div>

          <div className="submit_btn">
            <button type="submit">Login</button>
          </div>
          <div>
            <Link to="/forgetPassword">Forgot password? </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
