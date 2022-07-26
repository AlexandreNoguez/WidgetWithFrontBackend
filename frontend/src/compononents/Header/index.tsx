import { ChalkboardTeacher } from 'phosphor-react';
import React from 'react';
import { IoIosConstruct, IoIosHome } from 'react-icons/io';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/img/logo1.png'


const Header: React.FC = () => {
    return (
        <header className="text-lg flex justify-between items-center xm:text-sm xm:text-center p-4 bg-slate-800">
            <div className='h-10 w-10'>
                <img className='rounded-full hover:animate-spin' src={logoImg} alt="React developer logotipo" />
            </div>
            <div>
                <nav className="flex gap-4 justify-center items-center xm:ml-20 xm:text-sm">

                    <Link to="/" className='flex items-center gap-1 hover:animate-bounce hover:animate-pulse ease-in-out hover:text-brand-300 transition-all'>
                        <IoIosHome />
                        <li>Início</li>
                    </Link>
                    <Link to="/tech" className='flex items-center gap-1 hover:animate-bounce hover:animate-pulse ease-in-out hover:text-brand-300 transition-all'>
                        <ChalkboardTeacher />
                        <li>Tecnologias</li>
                    </Link>
                    <Link to="/projetos" className='flex z-10 items-center gap-1 hover:animate-bounce hover:animate-pulse ease-in-out hover:text-brand-300 transition-all'>
                        <IoIosConstruct />
                        <li>Projetos</li>
                    </Link>

                </nav>
            </div >
        </header >
    )
}

export default Header;