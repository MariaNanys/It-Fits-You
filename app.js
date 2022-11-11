import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import { Layout } from "./Layout/Layout";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Calculator } from "./Pages/MainPage/Calculator";
import { Articles } from "./Pages/Articles/Articles";
import { Contact } from "./Pages/Contact/Contact";
import { NotFound } from "./Pages/NotFound/NotFound";


function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>  
            </Routes>
        </Router>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);