import React from 'react';
import ReactCEP from '../../assets/img/ReactCEP.png'
import OrganoRepo from '../../assets/img/Organorepo.png'
const Projects: React.FC = () => {
    return (
        <main className="flex">
            <div className=''>
                <div className="flex flex-wrap gap-6 text-xl items-center justify-center">

                    <div className='max-w-xs border-2 border-black rounded-md overflow-hidden text-center w-80 bg-slate-600 p-2 hover:brightness-150 hover:-translate-y-1 transition-all'>
                        <a href="https://react-zip-code.vercel.app/">
                            <img className='w-80' src={ReactCEP} />
                            <p className='relative'>Consumindo API para consultar CEP</p>
                        </a>
                    </div>
                    <div className='max-w-xs border-2 border-black rounded-md overflow-hidden text-center w-80 bg-slate-600 p-2 hover:brightness-150 hover:-translate-y-1 transition-all'>
                        <a href="https://react-login-page-two.vercel.app/">
                            <img className='' src={OrganoRepo} />
                            <p className='overflow-hidden'>Criando e armazenando usuários e repositórios</p>
                        </a>
                    </div>
                    <div className='max-w-xs border-2 border-black rounded-md overflow-hidden text-center w-80 bg-slate-600 p-2 hover:brightness-150 hover:-translate-y-1 transition-all'>
                        <img className='' src="https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?cs=srgb&dl=pexels-fernando-arcos-211122.jpg&fm=jpg" alt="imagem de um homem trabalhando em contrução" />
                    </div>
                    <div className='max-w-xs border-2 border-black rounded-md overflow-hidden text-center w-80 bg-slate-600 p-2 hover:brightness-150 hover:-translate-y-1 transition-all'>
                        <img className='w-80' src="https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?cs=srgb&dl=pexels-fernando-arcos-211122.jpg&fm=jpg" alt="imagem de um homem trabalhando em contrução" />
                    </div>
                    <div className='max-w-xs border-2 border-black rounded-md overflow-hidden text-center w-80 bg-slate-600 p-2 hover:brightness-150 hover:-translate-y-1 transition-all'>
                        <img className='w-80' src="https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?cs=srgb&dl=pexels-fernando-arcos-211122.jpg&fm=jpg" alt="imagem de um homem trabalhando em contrução" />
                    </div>
                    <div className='max-w-xs border-2 border-black rounded-md overflow-hidden text-center w-80 bg-slate-600 p-2 hover:brightness-150 hover:-translate-y-1 transition-all'>
                        <img className='w-80' src="https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg?cs=srgb&dl=pexels-fernando-arcos-211122.jpg&fm=jpg" alt="imagem de um homem trabalhando em contrução" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Projects;

