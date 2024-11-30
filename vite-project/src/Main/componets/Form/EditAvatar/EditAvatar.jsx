export default function EditAvatar() {
    return (
        <form className="form" noValidate>
            <h2 className="form__title"></h2>

            <label className="form__label" htmlFor="avatar-input">
                <input type="url" className="form__input" id="avatar-input" name="avatar" placeholder="Url de la nueva foto" defaultValue="" minLength="2" maxLength="100" required />
                <span className="form__error form__error_type"> </span>
            </label>
            <input type="submit" className="form__submit form__submit_photo button_inactive" value="Actualizar" />
        </form>
    );
}
