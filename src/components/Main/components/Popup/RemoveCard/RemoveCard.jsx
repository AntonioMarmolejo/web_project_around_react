import React from "react";
export default function DeleteCard({ onConfirm }) {
    return (
        <form className="form" onSubmit={onConfirm} noValidate>
            <h2 className="form__title form__title-delete">¿estás seguro...?</h2>
            <div className="form__buttom">
                <input
                    type="submit"
                    className="form__submit form__submit_confirmation"
                    value="Sí"
                />
            </div>
        </form>
    );
}
