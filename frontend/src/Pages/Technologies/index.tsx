import React from 'react';
import Carousel from '../../compononents/Carousel';
import Header from '../../compononents/Header';
import { Widget } from '../../compononents/Widget';

const Technologies: React.FC = () => {
    return (
        <div>
            <main className="bg-[#032518] grid grid-cols-2 w-screen h-screen ">
                <div className=" w-auto bg-gradient-to-r from-[#008852] via-[#00693f] to-[#032518] h-screen text-justify text-xl my-auto px-8 flex items-center justify-center flex-col">
                    <Header />
                    <Carousel />

                    <h1 className="font-bold mb-4">Tecnologias em estudo</h1>
                    <p>Devido a grande vastidão de tecnologias incríveis no mercado decido me especializar em algumas antes de seguir para um próximo aprendizado.</p>
                </div>
            </main>
            <Widget />
        </div>
    )
}

export default Technologies;