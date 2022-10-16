import React from "react";
import { Logo } from "../Logo/Logo";
import { NavMenu } from "../NavMenu/NavMenu";
import './PageHeader.scss';

export function PageHeader() {
    return (
       <div>
        <Logo />
        <NavMenu />
       </div>
    )
}