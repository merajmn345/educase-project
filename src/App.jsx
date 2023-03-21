import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  const signupPage = () => {
    setOpen(true);
  };

  const loginPage = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Best school management software in <br />
          India for facilitating a seamless app experience
        </p>
        <div className="form">
          <div className="toggle-button">
            <button className="toggle" onClick={loginPage}>
              Login
            </button>
          </div>
          <div className="toggle-button">
            <button className="toggle" onClick={signupPage}>
              SignUp
            </button>
          </div>
        </div>
        {open ? <SignUp /> : <Login />}
        <span id="forgot">Forgot Password?</span>
        <p className="login-with">or login with</p>
        <Footer />
      </div>
    </div>
  );
}

export default App;
