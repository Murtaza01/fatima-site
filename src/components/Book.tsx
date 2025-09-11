import "./books.css"

interface props {

  img: string
}

export default function Book({ img }: props) {

  return (
    <div className="book">
      <div className="book-inner">
        <div className="front face" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="side" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="back face" style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </div>
  )
}
