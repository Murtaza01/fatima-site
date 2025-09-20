import Image from "./Image";

interface props {
  path: string;
  extention: string;
}


export default function Painting({ path, extention }: props) {

  return <div className="h-70  sm:w-60 sm:h-80 md:w-70 md:h-90 xl:w-80 xl:h-100">
    <Image style="border-2 h-full w-auto sm:w-full 
        rounded-md shadow-lg shadow-emerald-950
        border-accent" path={path} extention={extention} />
  </div>
}
