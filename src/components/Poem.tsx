import type { ReactNode } from "react";

interface props {
  title: ReactNode;
  poem: ReactNode;
  lang: string;
}

export default function Paper({ title, poem, lang }: props) {


  return <div dir={lang == "ar" ? "rtl" : ""} id={"paper"} className=" my-10 relative
    mx-auto bg-gray-100 w-78 h-100 text-black
    shadow-xl space-y-2 shadow-black px-4 py-2 overflow-hidden rounded-xs sm:w-86 sm:h-115
    md:w-92 md:h-125">
    {title}
    {poem}
  </div>
}

