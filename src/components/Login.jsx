import React from "react";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-flex">
      <input
        className="login-email"
        type="email"
        placeholder="Email Address"
        required
      />
      <input
        className="login-password"
        type="password"
        placeholder="Password"
        required
      />
      <button className="login-button">LOGIN</button>
    </div>
  );
}

export default Login;
