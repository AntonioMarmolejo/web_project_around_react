import React from "react";
import pencil from "../images/Vector-pencil2.svg";

import imagenPerfil from "../images/image.jpg";
import imagenSuma from "../images/Vector-suma-agregar.svg";
import iconClose from "../images/Close-Icon.svg";
import reciclaje from "../images/Group__reciclaje.svg";
import corazon from "../images/Vector-corazon.svg";
import Popup from "./componets/Popup/Popup";
import EditProfile from "./componets/Form/EditProfile/EditProfile";
import DeleteCard from "./componets/Form/DeleteCard/DeleteCard";
import Avatar from "./componets/Form/EditAvatar/EditAvatar";
import { useState } from "react";
import NewCard from "./componets/Form/NewCard/NewCard";

export default function Main() {
    const [popup, setPopup] = useState(null);
    const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };

    function handleOpenPopup(popup) {
        setPopup(popup);
    }

    return (
        <>
            <div className="buttons">
                <div className="buttons buttons__avatar">
                    <button className="buttons__edit">
                        <img className="buttom__edit_pencil" src={pencil} alt="icono de pencil" />
                    </button>
                    <img className="buttons__image" src={imagenPerfil} alt="Imagel de Jacques Cousteau" />
                </div>

                <div className="buttons buttons__intro">
                    <h2 className="buttons__intro buttons__name">Jacques Cousteau</h2>

                    <button className="buttons__item buttons__item_index_profile">
                        <img src={pencil} alt="icono de pencil" />
                    </button>

                    <p className="buttons__intro buttons__explorer">Explorer</p>
                </div>

                <button className="buttons__item buttons__item_index_add-card">
                    <img src={imagenSuma} alt="ícono de mas para agregar tarjetas" />
                    onClick = {() => handleOpenPopup(newCardPopup)}
                </button>

                <div className="buttons__modal"></div>
            </div>

            <Popup title={"Nuevo Lugar"}>
                <NewCard />
            </Popup>
            <Popup title={"Editar perfil"}>
                <EditProfile />
            </Popup>

            <Popup title={"Estas Seguro...?"}>
                <DeleteCard />
            </Popup>

            <Popup title={"Cambiar foto de perfil"}>
                <Avatar />
            </Popup>

            <div className="popup popup_content-image">
                <div className="popup__overlay"></div>

                <div className="popup__content popup__content_select">
                    <div className="popup__close-button popup__close-buttons">
                        <img src={iconClose} alt="ícono de cerrar ventana de imagen" />
                    </div>
                    <img src="#" alt="Imagen seleccionada" className="popup__image" id="popup__image" />
                    <p className="popup__title"></p>
                </div>
            </div>

            <div className="cards"></div>

            <template id="newElement">
                <div className="cards__element" id="cards__element_trastId">
                    <div className="cards__element_trast">
                        <img src={reciclaje} alt="Icono de reciclaje" />
                    </div>
                    <img className="cards__element_image" src="#" alt="imagen de Vanoise National" />
                    <div className="cards__element_item">
                        <h2 className="cards__element_itemTitle"></h2>
                        <div className="cards__element_like">
                            <img className="cards__element_itemImage" src={corazon} />
                            <h3 className="countlike"></h3>
                        </div>
                    </div>
                </div>
            </template>

            {popup && (
                <Popup onClose={handleClosePopup} title={popup.title}>
                    {popup.children}
                </Popup>
            )}
        </>
    );
}
