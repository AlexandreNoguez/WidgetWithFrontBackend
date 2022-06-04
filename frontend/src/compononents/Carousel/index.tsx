//Imagem de <a href="https://pixabay.com/pt/users/boskampi-3788146/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1873854">Boskampi</a> por <a href="https://pixabay.com/pt/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1873854">Pixabay</a>
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";

import { EffectCube, Pagination } from "swiper";

export default function Carousel() {

    return (
        <>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper w-60 h-60 text-center m-auto justify-center items-center xm:w-28 xm:h-28"
            >

                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className="xm:mb-10" />
                    {/* <p className="legend">ReactJS</p> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
                    {/* <p className="legend">NodeJS</p> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://camo.githubusercontent.com/0566752248b4b31b2c4bdc583404e41066bd0b6726f310b73e1140deefcc31ac/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png" />
                    {/* <p className="legend">Express</p> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://avatars.githubusercontent.com/u/7552965?s=280&https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXU7OThk_FsW2_Jtca19h1wUYqgq50zlnTlDxN7TJ4xf9b54jhqrxE2NmQaPhqlo00BAE&usqp=CAUv=4" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}