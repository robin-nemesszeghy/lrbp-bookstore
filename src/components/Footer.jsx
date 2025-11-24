import React from "react";
import Logo from "../assets/Little Red Bird Publishing Favicon Transparent.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img className="footer__logo--img" src={Logo} alt="" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link className="footer__link" to="/">
              Home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link className="footer__link" to="/books">
              Books
            </Link>
            <Link className="footer__link" to="/cart">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2026 Little Red Bird Publishing
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
