import { useState } from "react";
import Notifictation from "./Notification";

interface props {
  img: string;
  title: string;
  width: number;
  index: number
}


export default function SkillCard({ img, title, width, index }: props) {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const isEven = index % 2 === 0 

  function notify() {
    setIsOpen((prev) => !prev)

    setTimeout(() => {
      setIsOpen((prev) => !prev)
    }, 3000)
  }

  return <> <div onClick={notify} className={`backdrop-blur-xs shadow-md
    shadow-emerald-950 rounded-md flex flex-col ${width ? "gap-3" : ""}
    items-center w-44 h-48 hover:bg-accent font-head-ar text-lg
    text-center px-2 justify-center text-neutral-100 active:bg-accent `}>
    <img src={img} width={width ? width : 110} className="" />
    <p>{title}</p>
    <Notifictation isOpen={isOpen} isEven={isEven} />
  </div>
  </>
}
