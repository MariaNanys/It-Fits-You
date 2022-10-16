import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";

export function Logo() {
    return(
    <Link className="Logo" to="/">
        <span>It </span>
        <span className="logo__fits">Fits</span>
        <span> You</span>
    </Link>
    )
}