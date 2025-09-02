import Paper from "./Paper"
import { SwiperSlide, Swiper } from "swiper/react"
import { EffectCards } from "swiper/modules"
import 'swiper/css'
import poems from "../assets/data/poems"



function SliderPapers() {

  return <Swiper modules={[EffectCards]} effect="cards"
    cardsEffect={{ slideShadows: false, perSlideRotate: 8, perSlideOffset: 5 }}
    className="flex justify-center items-center">
    {poems.map(({ poem, lang, title }) => {
      return <SwiperSlide><Paper poem={poem} lang={lang} 
        title={title} /></SwiperSlide>
    })}
  </Swiper>
}

export default SliderPapers
