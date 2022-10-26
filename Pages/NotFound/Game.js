import React, { useEffect, useState } from "react";
import "./Game.scss";
import { Button } from '@mantine/core';
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

const cardsFood = [ fruits, pineapple, vegetables, vegetables2, fruits2, bellPepper, dish, watermelon, tomatoes, eggplant, peas, radish, pumkin, onion, carrot, cabbage, strawberry, cucumber, avocado, broccoli];

let length = 0;
let array = [];

let CounterInt = null;
let TimerInt = null;

export function GameCards({startGame}) {
    const [showInstruction, setShowInstruction] = useState(true);
    const [flipCard, setFlipCard] = useState(true);
    const [counter, setCounter] = useState(3);
    const [timer, setTimer] = useState(10);
    const [rotateGameBoard, setRotateGameBoard] = useState(false);
    const [hideBoard, setHideBoard] = useState(false);
    const [hideBoardContinue, setHideBoardContinue] = useState(false);
    const [timerStatus, setTimerStatus] = useState(false);
    const [randomPlaceOnBoard, setRandomPlaceOnBoard] = useState(0);
    const [randomPic, setRandomPic] = useState(0);
    const [turnCard, setTurnCard] = useState(false);
    const [finishedGame, setFinishedGame] = useState(false);
    
    const turnImageCard = turnCard ? 'transform-pic-card' : '';
    const turnNonImageCard = turnCard ? 'transform-nonpic-card' : '';

    function finishGame() {
        setHideBoardContinue(false);
        setRotateGameBoard(false);
        setHideBoard(false);
        setFinishedGame(true);
        setShowInstruction(false);
        clearInterval(TimerInt);
        clearInterval(CounterInt);
        clearTimeout();
    }
    
    function randomPicture() {
        let min = 0;
        let max = (cardsFood.length - 1);
        let result = Math.floor(Math.random() * (max - min) + min);
        setRandomPic(result);
        const imgPic = document.createElement('img');
        imgPic.setAttribute('src', cardsFood[result]);
        let maxPlace = 4;
        let resultPlace = Math.floor(Math.random() * (maxPlace - min) + min);
        setRandomPlaceOnBoard(resultPlace);

        array.push(resultPlace);
        if(length===4) {
            finishGame();
            return;
        }
        if(document.getElementsByClassName(resultPlace)[0]) {
            const divsCardsPic = document.getElementsByClassName(resultPlace)[0].parentElement.firstElementChild;
            const checkExistingImage = divsCardsPic.outerHTML.search('<img');
            if(checkExistingImage===-1) {
                    length++;
                    divsCardsPic.appendChild(imgPic);
            } else {
                randomPicture();
            }
        }
    }

    useEffect(() => {
        if(!randomPlaceOnBoard && !randomPic) {
            randomPicture();
        }
    }, [randomPic, randomPlaceOnBoard]);

    useEffect(() => {
        if (counter === 0 ) {
            setShowInstruction(false);
            setFlipCard(false);
            setRotateGameBoard(true); 
        }
        if(startGame) {
            CounterInt = counter > 0 && setInterval(() => {
                setCounter((time) => time - 1);
            }, 1000);
        }
        return () => {  
            clearInterval(CounterInt);
            clearTimeout();
        }
    }, [counter, startGame]);

    useEffect(() => {
        if (timer === 0 ) {
            setRotateGameBoard(false);
            setHideBoard(true);
        }
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



    function checkAnswer(i) {
        setTurnCard(true);
        if(array[array.length-1] == i){
            setTimeout(() => {
                setHideBoard(false);
                setRotateGameBoard(false);
                setHideBoardContinue(true);
                if(length===4) {
                    finishGame();
                    return;
                }
            }, 2000);
        } else {
            setTurnCard(false);
            setRotateGameBoard(false);
            setHideBoard(true);
        }
    }

    function tryAgain() {
        setHideBoard(false);
        setRotateGameBoard(false);
        setShowInstruction(true);
        setFlipCard(true);
        setTimer(10);
        setCounter(5);
        setTimerStatus(false);
        setHideBoardContinue(false);
        setRandomPlaceOnBoard(0);
        setRandomPic(0);
        setTurnCard(false);
    }

    function tryAgainReset() {
       window.location.reload();
    }

    return(
        <div className="Game-Cards-content">
            <div className="content-cards">
                <div className={`game-over-hidden ${hideBoard ? 'game-over' : ''}`}><h2>Musisz popracować nad koncentracją.</h2>
                <Button
                onClick={tryAgainReset}
                className="ButtonCalculate ButtonCalculate-active"
                type="submit"
                variant="light"
                radius="md"
                size="lg"
                >
                    Spróbuję ponownie
                </Button></div>
                <div className={`game-over-hidden ${hideBoardContinue ? 'game-continue' : ''}`}><h2>Dobra robota!</h2>
                <Button
                onClick={tryAgain}
                className="ButtonCalculate ButtonCalculate-active"
                type="submit"
                variant="light"
                radius="md"
                size="lg"
                >
                    Gram dalej!
                </Button></div>
                <div className={`game-over-hidden ${finishedGame ? 'finished-game' : ''}`}><h2>Świetnie Ci poszło!</h2>
                <span>Może teraz skupimy się na Twoim ciele?</span>
                <Button
                component="a"
                href="/"
                className="ButtonCalculate ButtonCalculate-active"
                type="submit"
                variant="light"
                radius="md"
                size="lg"
                >
                    Chodźmy!
                </Button></div>
                <div className={`content-rows ${rotateGameBoard ? 'content-rows-rotate' : ''} ${hideBoard ? 'hide-board' : ''} ${hideBoardContinue ? 'hide-board' : ''} ${finishedGame ? 'hide-board' : ''}`}>
                    <div className="first-row">
                        <div className="first-cards" disabled={counter > 0 } onClick={(e) => checkAnswer(0)}>
                            <div className={`first-card-picture card block 0 ${turnImageCard}`}></div>
                            <div className={`first-card-without-picture card card-without ${flipCard ? '' : 'flipped-card'} ${turnNonImageCard}`}></div>
                        </div>
                        <div className="second-cards" disabled={counter > 0 } onClick={(e) => checkAnswer(1)}>
                            <div className={`second-card-picture card block 1 ${turnImageCard}`}></div>
                            <div className={`second-card-without-picture card card-without ${flipCard ? '' : 'flipped-card'} ${turnNonImageCard}`}></div>
                        </div>
                    </div>
                    <div className="second-row">
                        <div className="third-cards" disabled={counter > 0 } onClick={(e) => checkAnswer(2)}>
                            <div className={`third-card-picture card block 2 ${turnImageCard}`}></div>
                            <div className={`third-card-without-picture card card-without ${flipCard ? '' : 'flipped-card'} ${turnNonImageCard}`}></div>
                        </div>
                        <div className="fourth-cards" disabled={counter > 0 } onClick={(e) => checkAnswer(3)}>
                            <div className={`fourth-card-picture card block 3 ${turnImageCard}`}></div>
                            <div className={`fourth-card-without-picture card card-without ${flipCard ? '' : 'flipped-card'} ${turnNonImageCard}`}></div>
                        </div>
                    </div>
                </div>

                {showInstruction ? <div className="counter-instruction">
                    <div>{counter}s</div></div> : <div></div>}
                {rotateGameBoard ? <div className="timer-instruction">
                    <div>{timer}s</div></div> : <div></div>}
                    
                
            </div>
            {showInstruction ? <span className="Game-Cards-instruction">Zapamiętaj miejsce nowego obrazka. Masz {counter} sekund na zapamiętanie.</span> : <div></div>}
            {rotateGameBoard ? <span className="Game-Cards-instruction">Znajdź zapamiętany obrazek.</span> : <div></div>}
        </div>
    )
}