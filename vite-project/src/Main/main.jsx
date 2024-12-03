import React, { useState } from "react";
import pencil from "../images/Vector-pencil2.svg";
import imagenPerfil from "../images/image.jpg";
import imagenSuma from "../images/Vector-suma-agregar.svg";
import iconClose from "../images/Close-Icon.svg";
import Popup from "./componets/Popup/Popup";
import EditProfile from "./componets/Form/EditProfile/EditProfile";
import Avatar from "./componets/Form/EditAvatar/EditAvatar";
import NewCard from "./componets/Form/NewCard/NewCard";
import Cards from "./componets/Cards/Cards";

const cards = [
    {
        isLiked: false,
        _id: "5d1f0611d321eb4bdcd707dd",
        name: "Yosemite Valley",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
        owner: "5d1f0611d321eb4bdcd707dd",
        createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
        isLiked: false,
        _id: "5d1f064ed321eb4bdcd707de",
        name: "Lake Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
        owner: "5d1f0611d321eb4bdcd707dd",
        createdAt: "2019-07-05T08:11:58.324Z",
    },
];
console.log(cards);

export default function Main() {
    const [popup, setPopup] = useState(null);
    const newCardPopup = { title: "", children: <NewCard /> };
    const [selectedImage, setSelectedImage] = useState(null);

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
                        src={imagenPerfil}
                        alt="Imagel de Jacques Cousteau"
                    />
                </div>

                <div className="buttons buttons__intro">
                    <h2 className="buttons__intro buttons__name">Jacques Cousteau</h2>

                    <button
                        className="buttons__item buttons__item_index_profile"
                        onClick={() => handleOpenPopup("editProfile")}>
                        <img src={pencil} alt="icono de pencil" />
                    </button>

                    <p className="buttons__intro buttons__explorer">Explorer</p>
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
                <imagenPopup
                    card={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}

            <ul className="cards__list">
                {cards.map((card) => (
                    <Cards key={card._id} card={card} onLikeToggel={() => toggleLike(card.id)} />

                ))}
            </ul>

            {popup && (
                <Popup onClose={() => setPopup(null)} title={popup.title}>
                    {popup.children}
                </Popup>
            )}
        </>
    );
}
