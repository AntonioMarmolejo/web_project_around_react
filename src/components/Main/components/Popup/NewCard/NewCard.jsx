import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit, onClose }) {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAddPlaceSubmit({ name, link, });
        onClose();
    };

    return (
        <form className="form" noValidate onSubmit={handleSubmit}>
            <h2 className="form__title">Nuevo Lugar</h2>

            <label className="form__label" htmlFor="place-input">
                <input
                    type="text"
                    className="form__input"
                    id="place-input"
                    name="newplace"
                    placeholder="Nombre del Lugar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    minLength="2"
                    maxLength="30"
                    required
                />
                <span className="form__error form__error_type"> </span>
            </label>

            <label className="form__label" htmlFor="url-input">
                <input
                    type="url"
                    className="form__input"
                    id="url-input"
                    name="enlace"
                    placeholder="Url de la imagen"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    required
                />
                <span className="form__error form__error_type"></span>
            </label>

            <input type="submit" className="form__submit button_inactive" value="Crear" />
        </form>
    );
}
