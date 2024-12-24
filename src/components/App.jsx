import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";

export default function App() {
    const [currentUser, setCurrentUser] = useState({
        name: "Nombre", about: "about", avatar: "Avatar"
    });

    useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch((error) => {
                console.error('Error al obtener la tarjeta:', error);
            });
    }, []);


    return (
        <div className="page">
            <main className="main">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header />
                    <Main />
                    <Footer />
                </CurrentUserContext.Provider>
            </main>
        </div>
    );
}
