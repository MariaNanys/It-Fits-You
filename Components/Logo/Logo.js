import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";

export function Logo() {
    return(
    <Link className="Logo" to="/">
        <div className="Logo__part">
            <span>It </span>
            <span> You</span>
       </div>
       <span className="logo__fits">Fits</span>
    </Link>
    )
}