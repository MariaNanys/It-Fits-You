import React, { useEffect, useState } from "react";
import "./Game.scss";
import { Button} from '@mantine/core';
import fruits from "./data/001-fruits.png";
import pineapple from "./data/002-pineapple.png";
import vegetables from "./data/003-vegetables.png";
import vegetables2 from "./data/004-vegetables-1.png";
import fruits2 from "./data/005-fruits-1.png";
import bellPepper from "./data/006-bell-pepper.png";
import dish from "./data/007-dish.png";
import watermelon from "./data/008-watermelon.png";
import tomatoes from "./data/009-tomatoes.png";
import eggplant from "./data/010-eggplant.png";
import peas from "./data/011-peas.png";
import radish from "./data/012-radish.png";
import pumkin from "./data/013-pumkin.png";
import onion from "./data/014-onion.png";
import carrot from "./data/015-carrot.png";
import cabbage from "./data/016-cabbage.png";
import strawberry from "./data/017-strawberry.png";
import cucumber from "./data/018-cucumber.png";
import avocado from "./data/019-avocado.png";
import broccoli from "./data/020-broccoli.png";


export function GameCards() {
    const [showInstruction, setShowInstruction] = useState(true);
    const [flipCard, setFlipCard] = useState(true);
    const [counter, setCounter] = useState(2);
    const [timer, setTimer] = useState(15);
    const [rotateGameBoard, setRotateGameBoard] = useState(false);
    const [hideBoard, setHideBoard] = useState(false);
    const [timerStatus, setTimerStatus] = useState(false);

    useEffect(() => {
        if (counter === 0 ) {
            setShowInstruction(false);
            setFlipCard(false);
            setRotateGameBoard(true); 
        }
        const CounterInt = counter > 0 && setInterval(() => {
            setCounter((time) => time - 1);
        }, 1000);
        return () => {  
            clearInterval(CounterInt);
            clearTimeout();
        }
    }, [counter]);

    useEffect(() => {
        if (timer === 0 ) {
            setRotateGameBoard(false);
            setHideBoard(true);
        }
        let TimerInt = null;
        if(counter===0) {
            if(!timerStatus) {
                setTimeout(() => {
                    TimerInt = timer > 0 && setInterval(() => {
                        setTimer((time) => time - 1);
                    }, 1000);
                    setTimerStatus(true);
                }, 2000)
            } else {
                TimerInt = timer > 0 && setInterval(() => {
                    setTimer((time) => time - 1);
                }, 1000);
            }
        }
        return () => {  
            clearInterval(TimerInt);
        }
    }, [timer, timerStatus, counter]);

    function checkAnswer(e) {
        const element = document.getElementsByClassName(e.target.className);
        const parent = element.item(0).parentElement.outerHTML;
        if(parent.search('<img')!==-1){
            console.log('znalazlem');
        } else {
            console.log('szukaj dalej');
        }
    }

    function tryAgain() {
        setHideBoard(false);
        setRotateGameBoard(false);
        setShowInstruction(true);
        setFlipCard(true);
        setTimer(15);
        setCounter(10);
        setTimerStatus(false);
    }

    return(
        <div className="Game-Cards-content">
            <div className="content-cards">
                <div className={`game-over-hidden ${hideBoard ? 'game-over' : ''}`}><h2>Musisz popracować nad koncentracją.</h2>
                <Button
                onClick={tryAgain}
                className="ButtonCalculate ButtonCalculate-active"
                type="submit"
                variant="light"
                radius="md"
                size="lg"
                >
                    Oblicz zapotrzebowanie
                </Button></div>
                <div className={`content-rows ${rotateGameBoard ? 'content-rows-rotate' : ''} ${hideBoard ? 'hide-board' : ''}`}>
                    <div className="first-row">
                        <div className="first-cards" onClick={(e) => checkAnswer(e)}>
                            <div className={`first-card-picture card ${flipCard ? '' : 'flipped-card'}`}>
                                <img src={fruits} alt="vegetables" /> </div>
                            <div className="first-card-without-picture card card-without"></div>
                        </div>
                        <div className="second-cards" onClick={(e) => checkAnswer(e)}>
                            <div className="second-card-picture card"></div>
                            <div className="second-card-without-picture card card-without"></div>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="third-cards" onClick={(e) => checkAnswer(e)}>
                            <div className="third-card-picture card"></div>
                            <div className="third-card-without-picture card card-without"></div>
                        </div>
                        <div className="fourth-cards" onClick={(e) => checkAnswer(e)}>
                            <div className="fourth-card-picture card"></div>
                            <div className="fourth-card-without-picture card card-without"></div>
                        </div>
                    </div>
                </div>

                {showInstruction ? <div className="counter-instruction">
                    <div>{counter}s</div></div> : <div></div>}
                {rotateGameBoard ? <div className="timer-instruction">
                    <div>{timer}s</div></div> : <div></div>}
                    
                
            </div>
            {showInstruction ? <span className="Game-Cards-instruction">Zapamiętaj miejsce obrazka. Masz {counter} sekund na zapamiętanie.</span> : <div></div>}
            {rotateGameBoard ? <span className="Game-Cards-instruction">Znajdź zapamiętany obrazek.</span> : <div></div>}
        </div>
    )
}