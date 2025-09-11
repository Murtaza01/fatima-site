import Hero from "./layout/Hero"
import Nav from "./layout/Nav"
import Footer from "./layout/Footer"
import Skills from "./layout/Skills"
import Books from "./layout/Books"
import Heading from "./components/Heading"
import PaperSlider from "./components/PaperSlider"

function App() {

  return <div className="bg-hero text-white ">
    <Nav />
    <Hero />
    <Heading>أنه:</Heading>
    <Skills />
    <Heading>قصائدي</Heading>
    <PaperSlider />
    <Heading>كتبي المفضلة</Heading>
    <Books />
    <Footer />
  </div>

}

export default App
