import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Technologies from "../Pages/Technologies";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/tech" element={<Technologies />} />
            <Route path="*" element={<Home />} />
        </Routes>
    )
}

export default AppRoutes;