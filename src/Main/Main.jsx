import React, { useState, useContext } from "react";
import pencil from "../images/Vector-pencil2.svg";
import imagenSuma from "../images/Vector-suma-agregar.svg";
import Popup from "../components/Main/components/popup/Popup";
import EditProfile from "../components/EditProfile/EditProfile";
import Avatar from "../components/Main/components/popup/EditAvatar/EditAvatar";
import NewCard from "../components/Main/components/popup/NewCard/NewCard";
import Cards from "../components/Main/components/card/Card";
import ImagePopup from "../components/Main/components/popup/ImagePopup/ImagePopup";
import DeleteCard from "../components/Main/components/popup/RemoveCard/RemoveCard";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Main({
    onOpenPopup,
    onClosePopup,
    isPopupOpen,
    popupType,
    onUpdateAvatar,
    cards,
    onCardLike,
    onCardDelete,
    onRecycleClick,
    onAddPlaceSubmit,
    onUpdateUser,
}) {
    const [selectedImage, setSelectedImage] = useState(null);
    const { currentUser } = useContext(CurrentUserContext);


    return (
        <>
            <div className="buttons">
                <div className="buttons buttons__avatar">
                    <button className="buttons__edit" onClick={() => onOpenPopup("changeAvatar")}>
                        <img className="buttom__edit_pencil" src={pencil} alt="icono de pencil" />
                    </button>
                    <img className="buttons__image" src={currentUser.avatar} alt="Imagen del Avatar" />
                </div>

                <div className="buttons buttons__intro">
                    <h2 className="buttons__intro buttons__name">{currentUser.name}</h2>

                    <button className="buttons__item buttons__item_index_profile" onClick={() => onOpenPopup("editProfile")}>
                        <img src={pencil} alt="icono de pencil" />
                    </button>
                    <p className="buttons__intro buttons__explorer">{currentUser.about}</p>
                </div>

                <button className="buttons__item buttons__item_index_add-card" onClick={() => onOpenPopup("newPlace")}>
                    <img src={imagenSuma} alt="ícono de mas para agregar tarjetas" />
                </button>

                <div className="buttons__modal"></div>
            </div>

            {selectedImage && <ImagePopup card={selectedImage} onClose={() => setSelectedImage(null)} />}

            <div className="cards">
                {cards.map((card) => (
                    <Cards
                        key={card._id}
                        card={card}
                        onCardLike={onCardLike}
                        onRecycleClick={() => onRecycleClick(card)}
                        onImagenClick={setSelectedImage}
                    />
                ))}
            </div>

            {isPopupOpen && (
                <Popup isOpen={isPopupOpen} onClose={onClosePopup}>
                    {popupType === "editProfile" && (
                        <EditProfile
                            onUpdateUser={onUpdateUser}
                            onClose={onClosePopup}
                        />)}
                    {popupType === "newPlace" && (
                        <NewCard
                            onAddPlaceSubmit={onAddPlaceSubmit}
                            onClose={onClosePopup} />)
                    }
                    {popupType === "changeAvatar" && <Avatar onUpdateAvatar={onUpdateAvatar} onClose={onClosePopup} />}
                    {popupType === "deleteCard" && (
                        <DeleteCard
                            onConfirm={onCardDelete}
                            onClose={onClosePopup}
                        />
                    )}
                </Popup>
            )}
        </>
    );
}
