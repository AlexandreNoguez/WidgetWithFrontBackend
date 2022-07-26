import perfilImg from '../../assets/perfil.png';

const ProfilePhoto = () => {
    return (
        <div className='m-10 mr-4 flex justify-center items-center '>
            <img
                className="xm:w-4/6 sm:w-5/6 md:w-5/6 lg:w-5/6 rounded-full p-1 bg-gradient-to-r from-[#005f39] via-[#003c9c] to-[#920a00]"
                src={perfilImg}
                alt="foto do perfil de Alexandre"
            />
        </div>
    )
}

export default ProfilePhoto;