import type { ReactNode } from "react"

interface props {
  children: ReactNode;
}

export default function Heading({ children }: props) {


  return <h2 dir="rtl" className="px-5 font-sub-ar text-4xl
    bg-gradient-to-l from-pink-900 to-transparent my-5 h-20  shadow-lg 
    flex items-center ">{children}</h2>
}
