export default function NewCard() {
    return (
        <form className="form" novalidate>
            <h2 className="form__title">Nuvo Lugar</h2>

            <label className="form__label" for="place-input">
                <input type="text" className="form__input" id="place-input" name="newplace" placeholder="Nombre del Lugar" value="" minlength="2" maxlength="30" required />
                <span className="form__error form__error_type"> </span>
            </label>

            <label className="form__label" for="url-input">
                <input type="url" className="form__input" id="url-input" name="enlace" placeholder="Url de la imagen" value="" required />
                <span className="form__error form__error_type"></span>
            </label>

            <input type="submit" className="form__submit button_inactive" value="Crear" />
        </form>
    );
}
