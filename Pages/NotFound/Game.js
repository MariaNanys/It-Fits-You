import React from "react";
import "./Game.scss";
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

export function GameCards() {
    return(
        <div className="Game-Cards-content">
            <div className="content-cards">
                <div className="first-row">
                    <div className="first-cards">
                        <div className="first-card-picture card">
                            <img src={cardsFood.fruits} alt="vegetables" /> </div>
                        <div className="firts-card-without-picture card"></div>
                    </div>
                    <div className="second-cards">
                        <div className="second-card-picture card"></div>
                        <div className="second-card-without-picture card"></div>
                    </div>
                </div>
                <div className="second-row">
                    <div className="third-cards">
                        <div className="third-card-picture card"></div>
                        <div className="third-card-without-picture card"></div>
                    </div>
                    <div className="fourth-cards">
                        <div className="fourth-card-picture card"></div>
                        <div className="fourth-card-without-picture card"></div>
                    </div>
                </div>
                
            </div>
            <span className="Game-Cards-instruction">Zapamiętaj umiejscowienie obrazka.</span>
        </div>
    )
}