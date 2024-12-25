import { useState, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";



export default function EditProfile() {

    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState(currentUser.name);
    const [description, setDescription] = useState(currentUser.about);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    return (
        <form className="form" noValidate>
            <h2 className="form__title">Editar Perfil</h2>

            <label className="form__label" htmlFor="user-name">
                <input
                    type="text"
                    className="form__input"
                    id="user-name"
                    name="name"
                    placeholder="Nuevo usuario"
                    value={name}
                    onChange={handleNameChange}
                    minLength="2"
                    maxLength="40"
                    required
                />
                <span className="form__error form__error_type"></span>
            </label>

            <label className="form__label" htmlFor="activity-input">
                <input
                    type="text"
                    className="form__input"
                    id="activity-input"
                    name="activity"
                    placeholder="Actividad"
                    value={description}
                    onChange={handleDescriptionChange}
                    minLength="2"
                    maxLength="200"
                    required
                />
                <span className="form__error form__error_type"></span>
            </label>

            <input
                type="submit"
                className="form__submit button_inactive"
                value="Guardar"
            />
        </form>
    );
}
