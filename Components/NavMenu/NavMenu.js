import React from "react";  
import { NavLink } from "react-router-dom";
import './NavMenu.scss';

export function NavMenu({state, update}) {
    const wasClicked = state ? 'nav-menu-active' : 'nav-menu';
    return (
        <div className={`header__nav_menu ${wasClicked}`}>
            <ul className="NavMenu">
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'my-active' : 'my-non-active'}
onClick={() => update(false)}
                 >Strona główna</NavLink></li>
                <li><NavLink to="calculator" className={({ isActive }) => isActive ? 'my-active' : 'my-non-active'}
onClick={() => update(false)}>Kalkulator CPM i BMI</NavLink></li>
                <li><NavLink to="articles" className={({ isActive }) => isActive ? 'my-active' : 'my-non-active'}
onClick={() => update(false)}>Artykuły</NavLink></li>
                <li><NavLink to="contact" className={({ isActive }) => isActive ? 'my-active' : 'my-non-active'}
onClick={() => update(false)}>Kontakt</NavLink></li>
                {/* <li><NavLink to="login" className={({ isActive }) => isActive ? 'my-active' : 'my-non-active'}>Zaloguj/Zarejestruj się</NavLink></li> */}
            </ul>
        </div>
    )
}