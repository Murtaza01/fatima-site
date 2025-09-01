import "./poemsbook.css"
import HTMLFlipBook from "react-pageflip"
import poems from "../assets/data/poems"

function PoemBook() {


  return (
    <section className="flex py-24">
      <HTMLFlipBook className="" width={190} height={300} showCover={true} 
      flippingTime={800}>
        <div className="front-cover outer"></div>
        <div className="front-cover inner"></div>
        {poems.map(({ poem, title, lang }) => {
          return <div className="page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            {poem}
          </div>
        })}
        <div className="back-cover inner"> </div>
        <div className="back-cover outer"> </div>
      </HTMLFlipBook>
    </section>
  )


}

export default PoemBook
