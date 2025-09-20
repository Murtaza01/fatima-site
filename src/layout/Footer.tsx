import Image from "../components/Image"


export default function Footer() {

  return <footer className="flex justify-center items-center min-h-max py-4 shadow-lg shadow-black   flex-col gap-3  bg-transparent backdrop-blur-xs font-sub text-center px-3 mt-28 sm:text-lg">
    <div className="w-13 bg-gray-400 rounded-md 
      sm:w-15">
      <Image path="birdman" extention="png" style="w-9 pt-1 pr-0.5 sm:w-11 mx-auto" />
    </div>
    <p >This site was made possible by the effort
      of <i className="decoration-accent underline">Birdman</i>. An immortal gift to a mortal connection.</p>
  </footer>
}

