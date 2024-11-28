import React from "react";
import Header from "./Header/Hader.jsx";
import Main from "./componets/main.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
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

export default App;
