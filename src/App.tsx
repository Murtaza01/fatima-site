import Paper from "./components/Paper"
import SliderPapers from "./components/SliderPapers"

function App() {

  return <div className="bg-neutral-800 pb-10">
    <div className="bg-hero text-white px-8 py-24  flex flex-col gap-3 h-dvh">
      <span className="font-logo text-amber-300 text-4xl absolute left-0 top-0  px-3 py-1">Fat.</span>
      <h1 className="text-5xl font-main italic font-bold">The Fatima</h1>
      <p className="pl-1 font-main">Everything you need to know about me, and more.</p>

    </div>
    <SliderPapers />
  </div>

}

export default App
