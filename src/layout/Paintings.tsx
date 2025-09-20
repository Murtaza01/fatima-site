import { EffectCoverflow, } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Painting from "../components/Painting"

const paintigns = ["painting_1", "painting_3", "painting_2"]

export default function Paintings() {

  const desktopScreen = window.innerWidth >= 1024

  return <section className="" id="paintings">
    <Swiper
      modules={[EffectCoverflow]}
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={desktopScreen ? 3 : 2}
      coverflowEffect={{ slideShadows: false }}
    >
      {paintigns.map((path, index) => (
        <SwiperSlide key={index}><Painting path={path} extention="jpg" /></SwiperSlide>
      ))}
    </Swiper>
  </section>
}
