import React from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header className="absolute top-0 xm:text-sm xm:text-center">
            <ul className="flex gap-4 mt-4 xm:ml-20 underline xm:text-sm">

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