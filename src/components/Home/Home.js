import "./style.css"
import React from "react";
import logo from "./HomeLogo.svg"

function Home() {
 return (
    <div className="home-container">
        <div className="home-logo">
            <img className="home-logo-img" alt="Логотипчик" src={logo}/>
        </div>
        <div className="home-description">
            Текст для главной страницы, очень интересный, очень важное описание SPA: Запускается из директории приложения командой "npm start"
        </div>
    </div>
 )
}

export default Home;