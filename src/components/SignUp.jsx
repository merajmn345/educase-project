import React from "react";
import "../styles/signup.css";

function SignUp() {
  return (
    <div className="signup-flex">
      <input
        className="signup-email"
        type="email"
        placeholder="Email Address"
        required
      />
      <input
        className="signup-password"
        type="password"
        placeholder="Create Password"
        required
      />
      <input
        className="signup-password"
        type="password"
        placeholder="Confirm Password"
        required
      />
      <button className="signup-button">SIGN UP</button>
    </div>
  );
}

export default SignUp;
