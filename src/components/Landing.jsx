import React from "react";
import UndrawBooks from "../assets/undraw_bookshelves_vhu6.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Little Red Bird Publishing Recommended Books</h1>
            <h2>
              Find your dream book with
              <span className="beige"> Little Red's Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse Books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
