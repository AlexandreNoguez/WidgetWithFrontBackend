import { IoLogoCodepen, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import perfilImg from '../../assets/perfil.png'
import Header from '../../compononents/Header'
import { Widget } from '../../compononents/Widget'

export function Home() {
  return (
    <div>
      <main className="bg-[#032518] grid grid-cols-2 w-screen h-screen ">
        <div className=" w-auto bg-gradient-to-r from-[#008852] via-[#00693f] to-[#032518] h-screen text-justify text-xl my-auto px-8 flex items-center justify-center flex-col">
          <Header />
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

export default Home
