import fatimaPic from "../assets/images/fatima.jpg"

function Hero() {

  return <div className="px-3 mt-16 gap-3 h-80
    mx-3 backdrop-blur-xs rounded-md shadow-lg 
    shadow-emerald-950 flex items-center mb-20">
    <div className="flex gap-2 items-center flex-col">
      <img
        src={fatimaPic}
        alt=""
        className="rounded-full border-2 border-accent w-34"
      />

      <h1 className="text-3xl font-main italic font-bold">This is
        <span className="text-accent"> Fatima</span> </h1>
      <p>A female</p>
    </div>
    <div></div>
  </div>

}

export default Hero
