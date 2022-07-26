import React from 'react';
import Carousel from '../../compononents/Carousel';

const Technologies: React.FC = () => {
    return (
        <main className="flex container m-auto min-h-full">
            <div className="m-10 xm:text-sm xm:text-left">
                <Carousel />
            </div>
            <div className='text-justify text-lg xm:text-sm xm:text-center'>
                <h1 className="text-center font-bold my-4">Tecnologias em estudo</h1>
                <p>Devido a grande vastidão de tecnologias incríveis no mercado decido me especializar em algumas antes de seguir para um próximo aprendizado. Estas são algumas das quais elegi para me aprofundar um pouco mais antes de seguir para a próxima.</p>
            </div>
        </main>

    )
}

export default Technologies;