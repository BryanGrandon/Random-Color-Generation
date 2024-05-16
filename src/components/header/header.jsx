import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";

import "./header.css";

function Header() {
  return (
    <article className="header">
      <article className="header__content">
        <nav className="header__nav">
          <a href="/" className="header__logo">
            Logo
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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            recusandae eius incidunt aut rerum cumque dicta. Quibusdam facilis
            quidem
          </p>
        </section>
      </article>
    </article>
  );
}

export default Header;