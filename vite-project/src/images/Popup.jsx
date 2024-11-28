import React from "react";
import iconClose from "../images/Close-Icon.svg";

export default function Pupup(props) {
    const { title, children } = props;
    return (
        <div>
            <div className="popup">
                <div className="popup__overlay"></div>
                <div className="popup__content">
                    <div className="popup__close-button">
                        <img src={iconClose} alt="ícono de cerrar ventana" />
                    </div>
                    <h2 className="form__title">{title}</h2>
                    {children}
                </div>
            </div>
        </div>
    );
}
