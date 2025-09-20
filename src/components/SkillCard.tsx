import { useState } from "react";
import Notifictation from "./Notification";
import Image from "./Image";

interface props {
  path: string;
  title: string;
  des: string;
  width: number;
  extention: string;
}


export default function SkillCard({ path, title, width, des, extention }: props) {

  const [isOpen, setIsOpen] = useState<boolean>(false)


  function notify() {
    setIsOpen((prev) => !prev)

    setTimeout(() => {
      setIsOpen((prev) => !prev)
    }, 3000)
  }

  return <> <div onClick={notify} className="backdrop-blur-xs shadow-md 
    shadow-emerald-950 rounded-md flex flex-col gap-2 hover:cursor-pointer
    items-center size-44 hover:bg-accent font-head-ar text-lg 
    text-center px-2 justify-center text-neutral-100 active:bg-accent
    md:size-52 md:text-xl md:gap-4 ">
    <Image path={path} width={width} extention={extention} />
    <p >{title}</p>
    <Notifictation isOpen={isOpen}
      msg={des} />
  </div>
  </>
}
