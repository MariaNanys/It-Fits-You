import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import { Layout } from "./Layout/Layout";
import { Calculator } from "./Pages/MainPage/Calculator";
import { Articles } from "./Pages/Articles/Articles";


function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={< Calculator/>} />
                    <Route path="/Articles" element={<Articles />} />
                </Route>  
            </Routes>
        </Router>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);