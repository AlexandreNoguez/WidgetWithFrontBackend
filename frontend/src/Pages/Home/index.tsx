import ProfilePhoto from '../../compononents/ProfilePhoto'

export function Home() {

  return (
    <main className="flex ">
      <div className="w-1/2 m-auto text-center text-xl px-8 items-center justify-center">
        <h1 className="text-xl font-bold text-center mb-4 xm:text-sm xm:text-left ">
          Alexandre Noguez
        </h1>
        <p className='xm:text-xs xm:text-center sm:text-sm sm:text-center md:text-base'>
          Sou um entusiasta da arte e da tecnologia. No momento venho buscando aprimorar minhas habilidades, desenvolvendo aplicações no front-end e back-end, realizando estudos de várias tecnologias, como React, NodeJS, Typescript e MongoDB.
        </p>
      </div>
      <div className='w-1/2 mx-auto'>
        <ProfilePhoto />
      </div>
    </main>
  )
}
//bg-gradient-to-r from-[#008852] via-[#00693f] to-[#032518] ANTIGO BACKGROUND
export default Home;