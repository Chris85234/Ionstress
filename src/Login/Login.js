import React from "react";
import "../styles/Login/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function LogIn() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="heading">Sign In</div>
        <form action="" className="form">
          <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
          <input required className="input" type="password" name="password" id="password" placeholder="Password" />
          <span className="forgot-password">
            <a href="#">Forgot Password?</a>
          </span>
          <input className="login-button" type="submit" value="Sign In" />
        </form>

        {/* Redes Sociales */}
        <div className="social-account-container">
          <span className="title">Or Sign in with</span>
          <div className="social-accounts">
            <button className="social-button">
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button className="social-button">
              <FontAwesomeIcon icon={faXTwitter} />
            </button>
            <button className="social-button">
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
        </div>

        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </div>
    </div>
  );
}

export default LogIn;
