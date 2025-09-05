import Hero from "./layout/Hero"
import PaperSlider from "./components/PaperSlider"
import Nav from "./layout/Nav"
import Footer from "./layout/Footer"
import SkillCard from "./components/SkillCard"

function App() {

  return <div className="bg-hero text-white ">
    <Nav />
    <Hero />
    <h2 className=" px-10 my-20 
      font-main text-4xl">My Skills</h2>
    <div className="flex justify-center py-10">
          <SkillCard />
    </div>
    <Footer />
  </div>

}

export default App
