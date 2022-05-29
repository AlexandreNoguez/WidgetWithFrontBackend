import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header className="absolute top-0">
            <ul className="flex gap-4 mt-4 underline">

                <Link to="/">
                    <li>Início</li>
                </Link>
                <Link to="/tech">
                    <li>Tecnologias</li>
                </Link>
                <Link to="/projetos">
                    <li>Projetos</li>
                </Link>

            </ul>
        </header>
    )
}

export default Header;