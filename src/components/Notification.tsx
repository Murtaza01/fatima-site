interface props {
  isOpen: boolean;
  msg: string;
}

import { animated, useTransition } from "@react-spring/web"

export default function Notifictation({ isOpen, msg }: props) {


  const transition = useTransition(isOpen, {
    from: { opacity: 0, y: 25 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 25 },
    config: { tension: 150, friction: 12 },
  })

  return <> {transition((style, item) => (item &&
    <animated.div style={style} className={`absolute
-top-10 left-6 font-ar shadow-md z-10 `}>
      <div id="speech-bubble" className="relative
        w-40 bg-teal-800 rounded-lg px-2 py-1 ">
        <p>{msg}</p>
      </div>
    </animated.div>

  ))
  }
  </>
}
