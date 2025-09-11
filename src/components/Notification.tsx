interface props {
  isOpen: boolean;
  isEven: boolean;
  msg: string;
}

import { animated, useTransition } from "@react-spring/web"

export default function Notifictation({ isOpen, isEven, msg }: props) {

  const isLeft = isEven ? "TranslateX(-20px)" : "TranslateX(20px)"

  const transition = useTransition(isOpen, {
    from: { opacity: 0, transform: isLeft },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: isLeft },
    config: { tension: 120, friction: 8 },
  })

  return <> {transition((style, item) => (item &&
    <animated.div style={style} className={`absolute z-10 -top-10
      ${isLeft === "TranslateX(20px)" ? "-right-[20%] rounded-l-full" : "-left-[20%] rounded-r-full"}
      w-40 shadow-lg  bg-teal-900  p-2  font-ar`}>
      <p>{msg}</p>
    </animated.div>

  ))
  }
  </>
}
