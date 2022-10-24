import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@mantine/core';
import './MainPage.scss';



export function MainPage() {
    
    function Buttons() {
    return (
        <Button
        component="a"
        className="Button-main-page"
        radius="md"
        size="md"
        href="Calculator"
        >
        Zaczynamy!
        </Button>
    );
    }

    return (
        <div className="MainPage">
            <div className="MainPage-text">
                <h1>Witaj!</h1>
                <Link to="/oops">Let's go</Link>
                <span>
                    Cieszę się, że jesteś.
                    </span>
                    <p>Jestem tu dla Ciebie. Od tej chwili możesz na mnie zawsze liczyć.</p>
                
                <span>
                    Zaczynamy zmieniać Twój świat?
                </span>
                <Buttons />
            </div>
            <div className="MainPage-infographic"></div>
        </div>
    )
}