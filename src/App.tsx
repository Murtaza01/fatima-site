import Hero from "./layout/Hero"
import Nav from "./layout/Nav"
import Footer from "./layout/Footer"
import Skills from "./layout/Skills"
import Books from "./layout/Books"
import Heading from "./components/Heading"
import Poems from "./layout/Poems"
import Paintings from "./layout/Paintings"
import "swiper/swiper-bundle.css"
import About from "./layout/ِAbout"

function App() {


  return <div className="text-white bg-emerald-900" style={{
    backgroundImage: `url(${import.meta.env.BASE_URL}images/birds.png)`,
    overflowAnchor: "none"
  }}>
    <Nav />
    <Hero />
    <Heading>أنه:</Heading>
    <Skills />
    <Heading>قصائدي</Heading>
    <Poems />
    <Heading>كتبي المفضلة</Heading>
    <Books />
    <Heading> رسماتي</Heading>
    <Paintings />
    <Heading>عني</Heading>
    <About />
    <Footer />
  </div>

}

export default App
