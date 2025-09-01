import PoemBook from "./components/Poemsbook"

function App() {

  return <div className="">
    <div className="bg-hero text-white px-8 py-24  flex flex-col gap-3 h-dvh">
      <span className="logo-font text-amber-300 text-4xl absolute left-0 top-0  px-3 py-1">Fat.</span>
      <h1 className="text-5xl main-font italic font-bold">The Fatima</h1>
      <p className="pl-1 main-font">Everything you need to know about me, and more.</p>

    </div>
    <PoemBook />
  </div>

}

export default App
