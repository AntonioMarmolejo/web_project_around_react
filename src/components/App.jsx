import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";

export default function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupType, setPopupType] = useState(null);

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
            console.error('Error al actualizar el usuario', error)
        }
    };

    // const handleUpdaterAvatar = async ({ avatar }) => {
    //     try {
    //         const updaterUser = await api.updateUserPhoto(avatar);
    //         setCurrentUser(updaterUser); //actualizar el avatar en currenUser
    //     } catch (error) {
    //         console.error('Error al actualizar el avatar', error)
    //     }
    // }

    return (
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
            <div className="page">
                <main className="main">
                    <Header />
                    <Main
                        onOpenPopup={handleOpenPopup}
                        onClosePopup={handleClosePopup}
                        isPopupOpen={isPopupOpen}
                        popupType={popupType}
                    />
                    <Footer />
                </main>
            </div>
        </CurrentUserContext.Provider>
    );
}
