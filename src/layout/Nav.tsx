import { useEffect, useRef, useState } from "react"
import NavItems from "../components/NavItems"
import { animated, useSpring } from "@react-spring/web"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Image from "../components/Image";

function Nav() {

  const [open, setOpen] = useState<boolean>(false)
  const [navHeight, setNavHeight] = useState(0)

  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (ref.current) {
      setNavHeight(ref.current.scrollHeight)
    }
  }, [])

  const navAnimation = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      opacity: open ? 1 : 0,
      height: open ? navHeight : 0,
    },
    config: { tension: 150, friction: 20 },
  });



  return <header className="sticky font-main z-10 top-0 backdrop-blur-xs  shadow-sm
    shadow-emerald-950 min-h-12 px-5 py-2 md:px-0 md:pl-4
    md:flex items-center ">
    <div className="flex  justify-between  ">
      <a href="#home" className="w-16 md:w-18"  >
        <Image path="fig" extention="png" />
      </a>
      <button className="text-2xl md:hidden "
        onClick={() => setOpen((prev) => !prev)}>{open ? <IoMdClose /> : <RxHamburgerMenu />}</button>
    </div>
    <animated.nav style={navAnimation} ref={ref} className="md:hidden overflow-hidden">
      <ul className="flex gap-0.5 items-center
        flex-col  text-lg " >
        <NavItems setOpen={setOpen} />
      </ul>
    </animated.nav>
    <ul className="hidden md:flex items-center justify-center flex-1 -ml-[72px] xl:-ml-[86px] gap-8 text-xl">
      <NavItems />
    </ul>
  </header >
}

export default Nav
