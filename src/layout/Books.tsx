import books from "../assets/data/books"
import Book from "../components/Book"


export default function Books() {
console.log(books[0].path)
  return <section className="flex flex-row gap-5 px-2
    justify-around items-center flex-wrap  sm:gap-10 md:w-[760px] md:mx-auto lg:w-[840px]" id="books" >
    {books.map(({extention,path},index) => {
      return <Book key={index} path={path} 
      extention={extention} />
    })}
  </section>
}
