import React from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/main.jsx";
import Footer from "./Footer/Footer.jsx";

export default function App() {
    return (
        <div className="page">
            <main className="main">
                <Header />
                <Main />
                <Footer />
            </main>
        </div>
    );
}
