import React from 'react';
import Header from '../../compononents/Header';
import { Widget } from '../../compononents/Widget';

const Technologies: React.FC = () => {
    return (
        <div>
            <main className="bg-[#032518] grid grid-cols-2 w-screen h-screen ">
                <div className=" w-auto bg-gradient-to-r from-[#008852] via-[#00693f] to-[#032518] h-screen text-justify text-xl my-auto px-8 flex items-center justify-center flex-col">
                    <Header />


                    <h1>Tecnologias estudadas</h1>
                </div>
                <div>

                </div>

            </main>
            <Widget />
        </div>
    )
}

export default Technologies;