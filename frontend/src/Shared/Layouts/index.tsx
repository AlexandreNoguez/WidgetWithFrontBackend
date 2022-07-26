import React from 'react';
import { IoLogoCodepen, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import Header from '../../compononents/Header';
import { Widget } from '../../compononents/Widget';

const BaseLayout: React.FC = () => {
    return (
        <div>
            <main className="bg-[#032518] grid grid-cols-2 w-screen h-screen ">
                <div className=" w-auto bg-gradient-to-r from-[#008852] via-[#00693f] to-[#032518] h-screen text-justify text-xl my-auto px-8 flex items-center justify-center flex-col xm:flex">
                    <Header />
                    <ul className="absolute right-0 ">
                        <a href="https://github.com/AlexandreNoguez" target="_blank">
                            <li>
                                <IoLogoGithub className="w-10 h-10" />
                            </li>
                        </a>
                        <a href="https://codepen.io/alexandrenoguez/full/OJzzLwz" target="_blank">
                            <li>
                                <IoLogoCodepen className="w-10 h-10" />
                            </li>
                        </a>
                        <a href="https://www.linkedin.com/in/alexandre-noguez/" target="_blank">
                            <li>
                                <IoLogoLinkedin className="w-10 h-10" />
                            </li>
                        </a>
                    </ul>
                </div>
            </main>
            <Widget />

        </div>
    )
}

export default BaseLayout;