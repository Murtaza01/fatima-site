import Poem from "../components/Poem"
import poems from "../assets/data/poems"
import { SwiperSlide, Swiper } from "swiper/react"
import { EffectCards } from "swiper/modules"

function PaperSlider() {


  return <section id="poems" className="overflow-hidden">
    <Swiper modules={[EffectCards]} effect="cards"
      cardsEffect={{ slideShadows: false, perSlideRotate: 4, perSlideOffset: 3 }}
      className="">
      {poems.map(({ poem, lang, title }, index) => {
        return <SwiperSlide key={index}>
          <Poem poem={poem} lang={lang} title={title} />
        </SwiperSlide>
      })}
    </Swiper>
  </section>
}

export default PaperSlider
