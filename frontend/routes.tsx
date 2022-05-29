import React from 'react';
import Home from './src/Pages/Home'
import Projects from './src/Pages/Projects'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Technologies from './src/Pages/Projects';

const MainRoutes: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/tech" element={<Technologies />} />
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRoutes;
