export default function EditProfile() {
    return (
        <form className="form" noValidate>
            <h2 className="form__title">Editar Perfil</h2>

            <label className="form__label" htmlFor="user-name">
                <input type="text" className="form__input" id="user-name" name="name" placeholder="Nuevo usuario" defaultValue="" minLength="2" maxLength="40" required />
                <span className="form__error form__error_type"></span>
            </label>

            <label className="form__label" htmlFor="activity-input">
                <input type="text" className="form__input" id="activity-input" name="activity" placeholder="Actividad" defaultValue="" minLength="2" maxLength="200" required />
                <span className="form__error form__error_type"></span>
            </label>

            <input type="submit" className="form__submit button_inactive" value="Guardar" />
        </form>
    );
}
