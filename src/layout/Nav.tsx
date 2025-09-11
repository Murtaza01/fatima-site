import { useEffect, useRef, useState } from "react"
import NavItems from "../components/NavItems"
import { animated, useSpring } from "@react-spring/web"
import { TextAlignJustify, X } from "lucide-react"


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



  return <header className="sticky z-10 top-0 backdrop-blur-xs  shadow-sm shadow-emerald-950 min-h-12 px-5 py-2">
    <div className="flex justify-between">
      <a href="#" className=" font-logo text-accent text-4xl px-3">Fat.</a>
      <button onClick={() => setOpen((prev) => !prev)}>{open ? <X /> : <TextAlignJustify />}</button>
    </div>
    <animated.nav style={navAnimation} ref={ref} className="overflow-hidden">
      <ul className="flex gap-0.5 items-center
        flex-col" >
        <NavItems setOpen={setOpen} />
      </ul>
    </animated.nav>
  </header >
}

export default Nav
