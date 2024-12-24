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

export default function Main() {
    const [popup, setPopup] = useState(null);
    const newCardPopup = { title: "", children: <NewCard /> };
    const [selectedImage, setSelectedImage] = useState(null);
    const [cards, setCards] = useState([]);
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        api.getInitialCard()
            .then((data) => {
                setCards(data);
            })
            .catch((error) => {
                console.error('Error al obtener la tarjeta:', error);
            });
    }, []);


    function handleOpenPopup(type) {
        switch (type) {
            case "editProfile":
                setPopup({ children: <EditProfile /> });
                break;
            case "newPlace":
                setPopup({ children: <NewCard /> });
                break;
            case "changeAvatar":
                setPopup({ children: <Avatar /> });
                break;
            case "deleteCard":
                setPopup({ children: <DeleteCard /> });
            default:
                setPopup(null);
        }
    }
    function handleClosePopup() {
        setPopup(null);
    }

    function toggleLike(cardId) {
        console.log(`Card ${cardId} like toggled`);
    }

    function handleRecycleClick(card) {
        setPopup({
            title: "Eliminar Tarjeta",
            children: (
                <DeleteCard
                    onConfirm={(e) => {
                        e.preventDefault();
                        console.log(`Tarjeta ${card.name} eliminada`);
                        setPopup(null)
                    }}
                />
            )
        })
    }

    return (
        <>
            <div className="buttons">
                <div className="buttons buttons__avatar">
                    <button
                        className="buttons__edit"
                        onClick={() => handleOpenPopup("changeAvatar")}>
                        <img
                            className="buttom__edit_pencil"
                            src={pencil}
                            alt="icono de pencil" />
                    </button>
                    <img
                        className="buttons__image"
                        src={currentUser.avatar}
                        alt="Imagel de Jacques Cousteau"
                    />
                </div>

                <div className="buttons buttons__intro">
                    <h2 className="buttons__intro buttons__name">{currentUser.name}</h2>

                    <button
                        className="buttons__item buttons__item_index_profile"
                        onClick={() => handleOpenPopup("editProfile")}>
                        <img src={pencil} alt="icono de pencil" />
                    </button>

                    <p className="buttons__intro buttons__explorer">{currentUser.about}</p>
                </div>

                <button
                    className="buttons__item buttons__item_index_add-card"
                    onClick={() => handleOpenPopup("newPlace")}>
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
                        onLikeToggel={() => toggleLike(card._id)}
                        onImagenClick={(card) => setSelectedImage(card)}
                        onRecycleClick={(card) => handleRecycleClick(card)}
                    />

                ))}
            </div>

            {popup && (
                <Popup onClose={() => setPopup(null)} title={popup.title}>
                    {popup.children}
                </Popup>
            )}
        </>
    );
}
