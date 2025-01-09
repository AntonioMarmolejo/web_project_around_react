import { useRef } from "react";

export default function EditAvatar({ onUpdateAvatar }) {
    const avatarInputRef = useRef(null);

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar({
            avatar: avatarInputRef.current.value, //Actualiza el avatar cuando cambia la entrada
        });
    }

    return (
        <form className="form" noValidate onSubmit={handleSubmit}>
            <h2 className="form__title">Editar Avatar</h2>

            <label className="form__label" htmlFor="avatar-input">
                <input
                    type="url"
                    className="form__input"
                    id="avatar-input"
                    name="avatar"
                    placeholder="Url de la nueva foto"
                    ref={avatarInputRef} //Usa ref para referenciar el input
                    defaultValue=""
                    minLength="2"
                    maxLength="100"
                    required />
                <span className="form__error form__error_type"> </span>
            </label>
            <input
                type="submit"
                className="form__submit form__submit_photo button_inactive"
                value="Actualizar"
            />
        </form>
    );
}