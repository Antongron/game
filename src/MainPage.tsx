import React from "react";
import demonSlightlyAngry from "./images/processed_image_1.png"; // Adjust the path
import demonAngry from "./images/processed_image_2.png"; // Adjust the path
import demonReallyAngry from "./images/processed_image_3.png"; // Adjust the path
import gamepad from "./images/gamepad.png"; // Adjust the path

function MainPage() {
    return (
        <div className="container">
            <h1>Привет!</h1>
            <h2>Поиграем?</h2>
            <div className="popup-contaner">
                <div className="popup-messages">
                    <div className="popup-count-1">Ты уверена?</div>
                    <div className="popup-count-2">
                        Ты что, не хочешь поиграть?
                        <img className="demon slightly-angry" src={demonSlightlyAngry} alt="Slightly Angry Demon" />
                    </div>
                    <div className="popup-count-3">
                        Я начинаю злиться.
                        <img className="demon angry" src={demonAngry} alt="Angry Demon" />
                    </div>
                    <div className="popup-count-4">
                        Ты не оставила мне выбора.
                        <img className="demon really-angry" src={demonReallyAngry} alt="Really Angry Demon" />
                    </div>
                </div>
            </div>
            <div className="images">
                <img src={gamepad} alt="Let's Play" />
            </div>
            <div className="buttons">
                <button className="yes">Да</button>
                <button className="no">Нет</button>
            </div>
        </div>
    );
}

export default MainPage;