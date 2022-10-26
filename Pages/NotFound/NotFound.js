import React, { useState } from "react";
import { Button } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import errorPage from "./errorPage.png";

import "./NotFound.scss";
import { GameCards } from "./Game";

export function NotFound() {
    const [show, setShow] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const showGameInstruction = show ? 'show-game-instruction' : '';
    const hide404Page = show ? 'hide-error' : '';
    const hideGameInstruction = showGame ? 'hide-game-instruction' : '';
    const startGame = showGame ? 'show-game' : '';

    function hideAndShow() {
        return setShow(true);
    }

    function startGameFunction() {
        setShowGame(true);
    }
    

    function CarouselGame() {
    return (
        <Carousel
        
        sx={{ maxWidth: '40rem', maxHeight: '40rem'}}
        mx="auto"
        height={200}
        withIndicators
        styles={{
            control: {
            '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
            },
            },
            
        }}
        >
        <Carousel.Slide>
            <div className="game-instruction-content">
            <h2 className="game-instruction-title">
            Pamięciowe obroty
            </h2>
            <span>
            Kiedy przeprowadzisz się do nowego miasta, Twój mózg przetwarza w myślach jego mapę i zapisuje ją w pamięci tak, aby można było bezpiecznie docierać do celu.
            </span>
            </div>
        </Carousel.Slide>
        <Carousel.Slide>
        <div className="game-instruction-content">
            <h2  className="game-instruction-title">
            Pamięciowe obroty
            </h2>
            <span>
            Dlatego to ćwiczenie trenuje umiejętność zapamiętywania i przywołania informacji na mapie. Obraca się ona często tak jak robi się to kierując się do celu.
            </span>
            </div>
        </Carousel.Slide>
        <Carousel.Slide>
        <div className="game-instruction-content">
            <h2 className="game-instruction-title">
            Pamięciowe obroty
            </h2>
            <span>
            Proszę o zapamiętanie gdzie znajdują się obrazki, a następnie śledzić jeśli zmienią pozycję.
            </span>
            <Button
                onClick={startGameFunction}
                className="Button-game"
                type="submit"
                variant="light"
                radius="md"
                size="lg"
            >
            Start
            </Button>
            </div>
        </Carousel.Slide>

        </Carousel>
    );
    }

    return (
        <div className="page-404">
            <div className={`content-404 ${hide404Page}`}>
                <img src={errorPage} className="content-404-image" alt="error-page" />
                <span className="content-404-first-text">Ojej! Coś poszło nie tak.</span>
                <span>Ale nie martw się, Twoim ciałem zajmiemy się następnym razem. Teraz możeny skupić się na umyśle.</span>
                <span>Zaczynamy?</span>
                <Button
                    onClick={hideAndShow}
                    className="ButtonCalculate ButtonCalculate-active"
                    type="submit"
                    variant="light"
                    radius="md"
                    size="lg"
                >
                Zaczynamy?
                </Button>
            </div>
            <div className={`content-game ${showGameInstruction}`}>
                <div className={`game-instruction ${hideGameInstruction}`}>
                    <CarouselGame />
                </div>
                <div className={`game-with-cards ${startGame}`}>
                    <GameCards startGame={showGame}/>
                </div>
            </div>
        </div>
    )
}
