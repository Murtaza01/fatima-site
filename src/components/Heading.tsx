import type { ReactNode } from "react"

interface props {
  children: ReactNode;
}

export default function Heading({ children }: props) {


  return <h2 dir="rtl" className="px-5 font-sub-ar text-4xl bg-gradient-to-l from-rose-900 to-transparent 
    h-20  shadow-lg flex items-center mt-34 mb-16
    md:bg-none  md:text-shadow-lg  md:text-5xl md:w-max md:ml-auto md:px-8 
    md:shadow-[inset_0_-0.3em_0_#f43f5e]
    " >{children}</h2>
}
