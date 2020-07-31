import React from "react";
import Logo from "../../assets/img/newflix-logo.png";
import "./menu.css";
import Button from './../Button';
// import ButtonLink from "./components/ButtonLink/index.js";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="NewFlix logo" />
      </a>
      <Button className="ButtonLink" href="/">
        Novo vídeo pega na moral
      </Button>
    </nav>
  );
}

export default Menu;
