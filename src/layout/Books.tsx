import books from "../assets/data/books"
import Book from "../components/Book"


export default function Books() {

  return <section className="flex justify-around items-center  pb-10">
    {books.map((img) => {
      return <Book img={img} />
    })}
  </section>
}
