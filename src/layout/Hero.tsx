import { useTransition, animated } from "@react-spring/web";
import { useState, } from "react";
import socialMedia from "../assets/data/socialMeida";
import { scrollToSection } from "../util/helpers";
import Image from "../components/Image";

function Hero() {

  const [visible, setVisible] = useState<boolean>(false)
  const [msg, setMsg] = useState<string>("")
  const transition = useTransition(visible, {
    from: { opacity: 0, x: 40 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 40 },
    config: { tension: 220, friction: 20 },
  })

  function handleClick(msg: string) {
    setVisible((prev) => !prev)
    setMsg(msg)

    setTimeout(() => {
      setVisible((prev) => !prev)
    }, 1500)
  }

  return <main id="home"
    className="mt-28 gap-2 h-74
    mx-2 backdrop-blur-xs rounded-md shadow-lg 
    shadow-emerald-950 flex  items-center 
    justify-around  sm:mx-5 md:w-[700px] md:mx-auto
    md:h-84 lg:w-[760px]">
    <div className="flex gap-2 items-center flex-col ">
      <Image path="fatima" extention="jpg" style="rounded-full border-2 border-accent 
        w-34 sm:w-40 md:mb-2 lg:size-44" />
      <h1 className="text-2xl font-bold font-sub
        text-shadow-lg sm:text-3xl
        ">This is <span className="
          text-accent
          ">Fat</span>ima
      </h1>
      <p className="font-par sm:text-lg">Half agony. Half pain.</p>
    </div>
    <div className="space-y-6  px-2
      flex flex-col  items-center 
       h-20 ">
      <button onClick={scrollToSection}>
        <a href="#skills" className="
        block px-2 py-0.5 w-36 sm:w-40 sm:py-1
        bg-accent/80 rounded-md shadow-lg lg:w-46 lg:text-xl 
        hover:bg-accent font-main text-lg 
        active:bg-accent active:scale-90 transition-all">Get to know me</a>
      </button>
      <span className="flex  text-2xl gap-3 sm:gap-4
        sm:text-3xl lg:text-4xl lg:gap-5">
        {socialMedia.map(({ icon: Icon, style, msg }, index) => (
          <Icon key={index} onClick={() => handleClick(msg)}
            className={`${style}`} />
        ))}
      </span>
      {transition((style, item) => (item &&
        <animated.p className=" text-center absolute 
          font-sub bottom-15 sm:bottom-12 sm:text-lg lg:text-xl"
          style={style}>{msg}</animated.p>
      ))}
    </div>
  </main>

}

export default Hero
