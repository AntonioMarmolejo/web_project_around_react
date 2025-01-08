import React, { useEffect } from "react";
import iconClose from "../images/Close-Icon.svg";

export default function Pupup({ isOpen, onClose, title, children }) {

    useEffect(() => {
        if (!isOpen) return;

        const handleEscClose = (evt) => {
            if (evt.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscClose);

        return () => {
            document.removeEventListener("keydown", handleEscClose);
        };
    }, [isOpen, onClose])

    return (
        <div className={`popup ${isOpen ? "popup_show" : ""}`}>
            < div className="popup__overlay" onClick={onClose} ></div >
            <div className={`popup__content ${!title ? "popup__content_content_image" : ""}`}>
                <div className="popup__close-button" onClick={onClose}>
                    <img
                        src={iconClose}
                        alt="ícono de cerrar ventana"
                    />
                </div>
                {title && <h2 className="popup__title">{title}</h2>}
                {children}
            </div>
        </div >
    );
}
