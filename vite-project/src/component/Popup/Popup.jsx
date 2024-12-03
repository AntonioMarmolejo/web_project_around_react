import React from "react";
import iconClose from "../../images/Close-Icon.svg";

export default function Pupup({ onClose, title, children }) {
    return (
        <div className="popup popup_show">
            <div className="popup__overlay" onClick={onClose}></div>
            <div className={`popup__content ${!title ? "popup__content_content_image" : ""}`}>
                <div className="popup__close-button">
                    <img
                        src={iconClose}
                        alt="ícono de cerrar ventana"
                        onClick={onClose}
                    />
                </div>
                {children}
                {/* {title && <h3 className="popup__title">{title}</h3>} {children} */}
            </div>
        </div>
    );
}
