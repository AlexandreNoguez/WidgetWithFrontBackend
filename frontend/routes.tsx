import React from 'react';
import Home from './src/Pages/Home'
import Projects from './src/Pages/Projects'
import Technologies from './src/Pages/Technologies'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/tech" element={<Technologies />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;
