import React from "react";  
import { Outlet } from "react-router-dom";
import { PageHeader } from '../Components/PageHeader/PageHeader';
import './Layout.scss';

export function Layout() {
    return (
        <>
        <PageHeader />
        <Outlet />
        </>
    )
}