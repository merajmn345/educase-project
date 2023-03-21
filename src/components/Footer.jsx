import React from "react";
import "../styles/footer.css";
import twitter from "../images/twitter-logo.png";
import fb from "../images/fb.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="social-link">
          <a href="https://cdnlogo.com/logo/google-icon_42306.html">
            <img
              width={30}
              height={30}
              src="https://cdn.cdnlogo.com/logos/g/23/goolge-icon.png"
              alt=""
            />
          </a>
        </div>
        <div className="social-link">
          <a href="www.facebook.com">
            <img width={30} height={30} src={fb} alt="" />
          </a>
        </div>
        <div className="social-link">
          <a href="www.twitter.com">
            <img width={30} height={30} src={twitter} alt="" />
          </a>
        </div>
      </div>
      <div className="extra-text">
        <p className="no-account">
          Don't have an account? <span>Create new now!</span>
        </p>
      </div>

      <div className="terms-conditions">
        <p>
          By signing up, you are agree with our <span>Terms & Conditions</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
