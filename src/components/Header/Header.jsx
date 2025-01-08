import React from "react";
import logo from "../../images/Vector-logo.svg";
import line from "../../images/Line.png";
export default function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo del Proyecto" />
            <img className="header__line" src={line} alt="Linea detalle del Logo" />
        </header>
    );
}
