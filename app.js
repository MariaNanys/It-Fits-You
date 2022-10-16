import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import { Layout } from "./Layout/Layout";
import { Articles } from "./Pages/Articles/Articles"
import { Home } from "./Components/Home/Home"

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={< Home/>} />
                    <Route path="/articles" element={<Articles />} />
                </Route>  
            </Routes>
        </Router>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);