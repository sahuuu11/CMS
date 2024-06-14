import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <h1>ONION ROUTING CMS</h1>
      <div className="container">
        <h2>Log In</h2>
        <form>
          <label style={{ float: "left", margin: 1 }}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username here"
          />

          <label style={{ float: "left", margin: 1 }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password here"
          />

          <button type="submit">Log In</button>
        </form>
        <Link to="createPage">
          <p style={{ float: "right" }}>create page</p>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
