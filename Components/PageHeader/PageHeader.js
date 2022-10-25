import React, { useState } from "react";
import { Logo } from "../Logo/Logo";
import { BurgerButton } from "../NavMenu/Burger";
import { NavMenu } from "../NavMenu/NavMenu";
import './PageHeader.scss';

export function PageHeader() {
    const [stateBurger, setStateBurger] = useState(null);


    function handleChange(state) {
        setStateBurger(state);
    }

    return (
       <div className="PageHeader">
        <div className="PageHeader__Logo-Burger">
             <Logo />
            <BurgerButton onChange={handleChange} update={stateBurger}/> 
        </div>
        <NavMenu state={stateBurger} update={handleChange}/>
       </div>
    )
}