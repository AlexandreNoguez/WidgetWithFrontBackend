import { IoLogoCodepen, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { Link } from 'react-router-dom'
import perfilImg from '../../assets/perfil.png'
import { Widget } from '../../compononents/Widget'

export function Home() {
  return (
    <div>
      <main className="bg-[#032518] grid grid-cols-2 w-screen h-screen ">
        <div className=" w-auto bg-gradient-to-r from-[#008852] via-[#00693f] to-[#032518] h-screen text-justify text-xl my-auto px-8 flex items-center justify-center flex-col">
          <header className="absolute top-0">
            <ul className="flex gap-4 mt-4 underline">

              <Link to="/tech">
                <li>Tecnologias</li>
              </Link>
              <Link to="/projetos">
                <li>Projetos</li>
              </Link>

            </ul>
          </header>
          <h1 className="text-xl font-bold text-center mb-4 ">
            Olá! Eu sou Alexandre Noguez
          </h1>
          <p>
            Sou um entusiasta da arte e da tecnologia. No momento venho buscando aprimorar minhas habilidades, desenvolvendo aplicações no front-end e back-end, realizando estudos de várias tecnologias, como React, NodeJS,
          </p>
        </div>

        <div className="grid justify-center items-center">
          <img
            className="grid justify-center items-center rounded-full w-auto h-auto bg-gradient-to-r p-[4px] from-[#005f39] via-[#003c9c] to-[#920a00]"
            src={perfilImg}
            alt="foto do perfil de Alexandre"
          />
          <ul className="absolute right-0 ">
            <Link to="https://github.com/AlexandreNoguez">
              <li>
                <IoLogoGithub className="w-10 h-10" />
              </li>
            </Link>
            <li>
              <IoLogoCodepen className="w-10 h-10" />
            </li>
            <li>
              <IoLogoLinkedin className="w-10 h-10" />
            </li>
          </ul>
        </div>
      </main>
      <Widget />

    </div>
  )
}

export default Home
