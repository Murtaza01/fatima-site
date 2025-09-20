import useAvif from "../util/useAvif";
import "./book.css"

interface props {
  path: string;
  extention: string;
}

export default function Book({ path, extention }: props) {

  const supportAvif = useAvif()

  const checkImg = supportAvif ? `${path}.avif` : `${path}.${extention}`

  return (
    <div className="book  w-40 h-58 sm:w-48 sm:h-70 lg:w-54 lg:h-80">
      <div className="book-inner">
        <div className="front face" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/${checkImg})` }}></div>
        <div className="side" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/${checkImg})` }}></div>
        <div className="back face" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/${checkImg})` }}></div>
      </div>
    </div>
  )
}
