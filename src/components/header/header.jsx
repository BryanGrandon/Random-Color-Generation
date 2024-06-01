import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

import "./header.css";

function Header() {
  return (
    <article className="header">
      <article className="header__content">
        <nav className="header__nav">
          <a href="https://github.com/BryanGrandon" className="header__logo">
            BG.Code
          </a>
          <a
            href="https://github.com/BryanGrandon/Random-Color-Generation"
            className="header__github"
            target="_blank"
          >
            <TbBrandGithubFilled />
            Repository
          </a>
        </nav>
        <section className="header__title">
          <h1 className="header__h1">Colors Generator</h1>
          <p className="header__text">
            This site is intended to allow you to generate both a random color
            and a random gradient.
          </p>
        </section>
      </article>
    </article>
  );
}

export default Header;
