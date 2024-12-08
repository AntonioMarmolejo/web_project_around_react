import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

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
