import fatimaPic from "../assets/images/fatima.jpg"

function Hero() {

  return <div className="px-8 mt-16 gap-3 h-80
   bg-gradient-to-tl from-emerald-900 to-transparent mx-5
    backdrop-blur-xs rounded-md shadow-lg shadow-emerald-800 shadow-emerald-950 flex items-center
    mb-20">
    <div className="flex gap-2 items-center flex-col">
      <img
        src={fatimaPic}
        alt=""
        className="rounded-full border-2 border-accent w-40"
      />

      <h1 className="text-4xl font-main italic font-bold">This is
        <span className="text-accent"> Fatima</span> </h1>
      <p>A female</p>
    </div>
  </div>

}

export default Hero
