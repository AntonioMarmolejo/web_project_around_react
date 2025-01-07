import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";

export default function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupType, setPopupType] = useState(null);
    const [popupAvatar, setPopupAvatar] = useState(false);

    useEffect(() => {
        api.getUserInfo().then(setCurrentUser).catch(console.error);

        api.getInitialCard().then(setCards).catch(console.error);
    }, []);

    //Función para contralar el boton, de reciclaje, al momento de darle click al ícono de basura
    function handleRecycleClick(card) {
        onOpenPopup("deleteCard");
    }

    //Lógica de los likes y dislikes de cada tarjeta
    const handleCardLike = async (card) => {
        const isLiked = card.likes.some((user) => user._id === currentUser._id);
        const promise = isLiked ? api.deleteCardLink(card._id) : api.linkCard(card._id);

        try {
            const newCard = await promise;
            setCards((prevCards) => prevCards.map((c) => (c._id === card._id ? newCard : c)));
        } catch (error) {
            console.error("Error al manejar el like:", error);
        }
    };

    const handleAddPlaceSubmit = async (data) => {
        try {
            const newCard = await api.addCard(data.name, data.link);
            setCards([newCard, ...cards]); // Añadir la nueva tarjeta al inicio
            setIsPopupOpen(false);
            setPopupType(null);
        } catch (error) {
            console.error("Error al agregar la nueva tarjeta:", error);
        }
    };

    const handleCardDelete = async (card) => {
        try {
            await api.deleteCard(card._id);
            setCards((prevCards) => prevCards.filter((c) => c._id !== card._id));
        } catch (error) {
            console.error("Error al eliminar la tarjeta:", error);
        }
    };

    const handleOpenPopup = (type) => {
        setIsPopupOpen(true);
        setPopupType(type);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
        setPopupType(null);
    };

    useEffect(() => {
        (async () => {
            try {
                const data = await api.getUserInfo();
                setCurrentUser(data);
            } catch (error) {
                console.error("Error al obtener la información del usuario:", error);
            }
        })();
    }, []);

    const handleUpdateUser = async (data) => {
        try {
            const newDate = await api.updateUser(data.name, data.about);
            setCurrentUser(newDate); //Actualizar los datos del perifl de usuario en currentUser
        } catch (error) {
            console.error("Error al actualizar el usuario", error);
        }
    };

    async function handleUpdaterAvatar(data) {
        if (!data.avatar) {
            console.error("No se ha proporcionado una URL de avatar válida");
            return;
        }

        try {
            const updateUserAvatar = await api.updateUserPhoto(data.avatar); //Actulizar la imagen del ávatar
            setCurrentUser(updateUserAvatar);
            setIsPopupOpen(false);
            setPopupType(null);
        } catch (error) {
            console.error("Error al Actualizar el Avatar: " + error);
        }
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser }}>
            <div className="page">
                <main className="main">
                    <Header />
                    <Main
                        cards={cards}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        onAddPlaceSubmit={handleAddPlaceSubmit}
                        onOpenPopup={(type) => {
                            setIsPopupOpen(true);
                            setPopupType(type);
                        }}
                        onClosePopup={() => {
                            setIsPopupOpen(false);
                            setPopupType(null);
                        }}
                        isPopupOpen={isPopupOpen}
                        popupType={popupType}
                        onUpdateAvatar={handleUpdaterAvatar}
                        onUpdateUser={handleUpdateUser}
                    />
                    <Footer />
                </main>
            </div>
        </CurrentUserContext.Provider>
    );
}
