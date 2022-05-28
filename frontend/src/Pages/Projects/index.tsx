import React from 'react';
import { Widget } from '../../compononents/Widget';

const Projects: React.FC = () => {
    return (
        <div>
            <main className="bg-[#032518] grid grid-cols-2 w-screen h-screen ">
                <div className=" w-auto bg-gradient-to-r from-[#008852] via-[#00693f] to-[#032518] h-screen text-justify text-xl my-auto px-8 flex items-center justify-center flex-col">
                    <Widget />
                </div>
            </main>
        </div>
    )
}

export default Projects;