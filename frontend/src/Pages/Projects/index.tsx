import React from 'react';
import Header from '../../compononents/Header';
import { Widget } from '../../compononents/Widget';

const Projects: React.FC = () => {
    return (
        <div>
            <main className="bg-[#032518] grid grid-cols-2 w-screen h-screen ">
                <div className=" w-auto bg-gradient-to-r from-[#008852] via-[#00693f] to-[#032518] h-screen text-justify text-xl my-auto px-8 flex items-center justify-center flex-col">
                    <Header />

                    <div>
                        <img src="https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?cs=srgb&dl=pexels-fernando-arcos-211122.jpg&fm=jpg" alt="imagem de um homem trabalhando em contrução" />
                    </div>
                    <Widget />
                </div>
            </main>
        </div >
    )
}

export default Projects;

