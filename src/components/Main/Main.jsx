import React, { useState, useEffect, useContext } from "react";
import pencil from "../../images/Vector-pencil2.svg";
import imagenPerfil from "../../images/image.jpg";
import imagenSuma from "../../images/Vector-suma-agregar.svg";
import Popup from "../Popup/Popup";
import EditProfile from "../EditProfile/EditProfile";
import Avatar from "../Avatar/EditAvatar";
import NewCard from "../NewCard/NewCard";
import Cards from "../Cards/Cards";
import ImagePopup from "../ImagePopup/ImagePopup";
import DeleteCard from "../RemoveCard/RemoveCard";
import { api } from "../../utils/Api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({ onOpenPopup, onClosePopup, isPopupOpen, popupType }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [cards, setCards] = useState([]);
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        api.getInitialCard()
            .then(setCards)
            .catch((error) => {
                console.error('Error al obtener la tarjeta:', error);
            });
    }, []);

    //Función para contralar el boton, de reciclaje, al momento de darle click al ícono de basura
    function handleRecycleClick(card) {
        onOpenPopup("deleteCard");
    }


    //Función que se encarga de manejar la lógica de los likes y dislikes cuando se haga click en el botón
    async function handleCardLike(card) {
        const isLiked = card.likes.some((user) => user._id === currentUser._id);
        const promise = isLiked ? api.deleteCardLink(card._id) : api.linkCard(card._id);

        await promise
            .then((newCard) => {
                setCards((state) =>
                    state.map((currentCard) =>
                        currentCard._id === card._id ? newCard : currentCard
                    )
                );
            }).catch((error) => console.log(error))
    }

    async function handleCardDelete(card) {
        await api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((currentCard) => currentCard._id !== card._id))
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className="buttons">
                <div className="buttons buttons__avatar">
                    <button
                        className="buttons__edit"
                        onClick={() => onOpenPopup("changeAvatar")}
                    >
                        <img
                            className="buttom__edit_pencil"
                            src={pencil}
                            alt="icono de pencil" />
                    </button>
                    <img
                        className="buttons__image"
                        src={currentUser.avatar}
                        alt="Imagen del Avatar"
                    />
                </div>

                <div className="buttons buttons__intro">
                    <h2 className="buttons__intro buttons__name">{currentUser.name}</h2>

                    <button
                        className="buttons__item buttons__item_index_profile"
                        onClick={() => onOpenPopup("editProfile")}
                    >
                        <img src={pencil} alt="icono de pencil" />
                    </button>
                    <p className="buttons__intro buttons__explorer">{currentUser.about}</p>
                </div>

                <button
                    className="buttons__item buttons__item_index_add-card"
                    onClick={() => onOpenPopup("newPlace")}>
                    <img
                        src={imagenSuma}
                        alt="ícono de mas para agregar tarjetas"
                    />
                </button>

                <div className="buttons__modal"></div>
            </div>

            {selectedImage && (
                <ImagePopup
                    card={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}

            <div className="cards">
                {cards.map((card) => (
                    <Cards
                        key={card._id}
                        card={card}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        onImagenClick={setSelectedImage}
                        onRecycleClick={(card) => handleRecycleClick(card)}

                    />

                ))}
            </div>

            {isPopupOpen && (
                <Popup isOpen={isPopupOpen} onClose={onClosePopup}>
                    {popupType === "editProfile" && <EditProfile onClose={onClosePopup} />}
                    {popupType === "newPlace" && <NewCard onClose={onClosePopup} />}
                    {popupType === "changeAvatar" && <Avatar onClose={onClosePopup} />}
                    {popupType === "deleteCard" && <DeleteCard onClose={onClosePopup} />}
                </Popup>
            )}

        </>
    );
}
