import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";



export default function EditProfile({ onClose }) {
    const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);
    const [name, setName] = useState(currentUser.name || "");
    const [description, setDescription] = useState(currentUser.about || "");

    useEffect(() => {
        setName(""); //Inicializa el nombre con el nombre actual del usuario
        setDescription(""); //Inicializa la descripción con la descripción actual del usuario
    }, [currentUser, onClose]); //Ejecuta el useEffect cuando currentUser cambia

    function handleNameChange(evt) {
        setName(evt.target.value); //Actuliza name cada vez que cambia la entrada
    }

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value); //Actuliza la descripción cuando cambia la entrada
    }

    async function handleSubmit(evt) {
        evt.preventDefault() //Evita el comportamiento predeterminado del nvegador
        try {
            await handleUpdateUser({ name, about: description }); //Llama a la función de actualización del usuario
            onClose(); //Cierra el popup
        } catch (error) {
            console.error('Error al actualizar el perfil', error);
        };
    }

    return (
        <form className="form" noValidate onSubmit={handleSubmit}>
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
