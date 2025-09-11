import type { ReactNode } from "react";

interface props {
  title: ReactNode;
  poem: ReactNode;
  lang: string;
}

function Paper({ title, poem, lang }: props) {


  return <div dir={lang == "ar" ? "rtl" : ""} id={"paper"} className=" my-10 mx-auto bg-gray-100 w-84 h-110 text-black
    shadow-xl space-y-2 shadow-black px-4 py-2 overflow-hidden rounded-xs">
    {title}
    {poem}
  </div>
}

export default Paper
