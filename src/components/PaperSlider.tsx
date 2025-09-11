import Paper from "./Paper"
import { SwiperSlide, Swiper } from "swiper/react"
import { EffectCards } from "swiper/modules"
import poems from "../assets/data/poems"
import 'swiper/swiper-bundle.css'

function PaperSlider() {


  return <Swiper modules={[EffectCards]} effect="cards"
    cardsEffect={{ slideShadows: false, perSlideRotate: 4, perSlideOffset: 3 }}
    className="flex justify-center items-center
     w-105">
    {poems.map(({ poem, lang, title }) => {
      return <SwiperSlide><Paper poem={poem} lang={lang}
        title={title} /></SwiperSlide>
    })}
  </Swiper>
}

export default PaperSlider
