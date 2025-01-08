import iconClose from "../../../images/Close-icon.svg";

export default function ImagePopup({ card, onClose }) {
    if (!card) return null;

    return (
        <div className="popup popup_content-image popup_show">
            <div
                className="popup__overlay"
                onClick={onClose}>
            </div>

            <div className="popup__content popup__content_select">
                <div className="popup__close-button popup__close-buttons">
                    <img
                        src={iconClose}
                        alt="ícono de cerrar ventana de imagen"
                        onClick={onClose}
                    />
                </div>
                <img
                    src={card.link}
                    alt={card.name}
                    className="popup__image"
                />
                <p
                    className="popup__title">
                    {card.name}
                </p>
            </div>
        </div>
    );
}
