import React, { useRef, useState } from "react";
import demonSlightlyAngry from "./images/processed_image_1.png";
import demonAngry from "./images/processed_image_2.png";
import demonReallyAngry from "./images/processed_image_3.png";
import gamepad from "./images/gamepad.png";

import './styles/MainPage.css';

function MainPage() {
    const [clickCounter, setClickCounter] = useState(0);
    const buttonNoRef = useRef<HTMLButtonElement>(null);



const hadleButtonNoClick = () =>  {
    setClickCounter((prev) => prev + 1);
    moveButtonNoRandomly();

};

function moveButtonNoRandomly() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const buttonWidth = buttonNoRef.current?.offsetWidth;
    const buttonHeight = buttonNoRef.current?.offsetHeight;

    // Generate random positions within the viewport
    const randomX = Math.random() * (viewportWidth - buttonWidth!);
    const randomY = Math.random() * (viewportHeight - buttonHeight!);

    if (buttonNoRef.current) {
        buttonNoRef.current.style.position = 'absolute'; // Ensure it's positioned absolutely
        buttonNoRef.current.style.left = `${randomX}px`;
        buttonNoRef.current.style.top = `${randomY}px`;
    }
}

const popupBody = () => {
    switch (clickCounter) {
        case 1:
            return (
                <div className="popup-count-2">
                    Ты что, не хочешь поиграть?
                    <img className="demon slightly-angry" src={demonSlightlyAngry} alt="Slightly Angry Demon" />
                </div>
            );
        case 2:
            return (
                <div className="popup-count-3">
                    Я начинаю злиться.
                    <img className="demon angry" src={demonAngry} alt="Angry Demon" />
                </div>
            );
        case 3:
            return (
                <div className="popup-count-4">
                    Ты не оставила мне выбора.
                    <img className="demon really-angry" src={demonReallyAngry} alt="Really Angry Demon" />
                </div>
            );
        default:
            return null;
    }
};


    return (
        <div className="container">
            <h1>Привет!</h1>
            <h2>Поиграем?</h2>
            <div className="popup-contaner">
                {clickCounter > 0 && (
                <div className="popup-messages">
                    <div className="popup-count-1">Ты уверена?</div>
                    {popupBody()}
                </div>
                )}
            </div>
            <div className="images">
                <img src={gamepad} alt="Let's Play" />
            </div>
            <div className="buttons">
                <button className="yes" onClick={() => {}}>Да</button>
                {clickCounter < 3 && (
                    <button ref={buttonNoRef} className="no" onClick={hadleButtonNoClick}>Нет</button>
                    )
                }
            </div>
        </div>
    );
}

export default MainPage;