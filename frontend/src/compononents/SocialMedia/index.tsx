import React from 'react';
import { IoLogoGithub, IoLogoCodepen, IoLogoLinkedin } from 'react-icons/io';

const SocialMedia: React.FC = () => {
    return (
        <nav>
            <ul className="bg-slate-800 absolute p-5 my-auto h-full right-0 top-0 flex flex-col items-center justify-center gap-2">
                <li className='hover:animate-bounce'>
                    <a href="https://github.com/AlexandreNoguez" target="_blank">
                        <IoLogoGithub className="w-10 h-10" />
                    </a>
                </li>
                <li className='hover:animate-bounce'>
                    <a href="https://codepen.io/alexandrenoguez/full/OJzzLwz" target="_blank">
                        <IoLogoCodepen className="w-10 h-10" />
                    </a>
                </li>
                <li className='hover:animate-bounce'>
                    <a href="https://www.linkedin.com/in/alexandre-noguez/" target="_blank">
                        <IoLogoLinkedin className="w-10 h-10" />
                    </a>
                </li>
            </ul>
        </nav >
    )
}

export default SocialMedia;