import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";
import Popup from "./Popup/Popup";

export default function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        (async () => {
            await api.getUserInfo().then((data) => {
                setCurrentUser(data);
            });
        })();
    }, []);



    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    }
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    }

    const handleUpdateUser = (data) => {
        (async () => {
            await api
                .updateUser(data.name, data.about)
                .then((newData) => {
                    setCurrentUser(newData);
                    handleClosePopup();
                })
                .catch((error) => console.error(error));
        })();
    };


    return (
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
            <div className="page">
                <main className="main">
                    <Header />
                    <Main
                        onOpenPopup={handleOpenPopup}
                        onClosePopup={handleClosePopup}
                        isPopupOpen={isPopupOpen}
                    />
                    <Footer />
                    <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
                </main>
            </div>
        </CurrentUserContext.Provider>
    );
}
