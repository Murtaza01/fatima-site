import brain from "../assets/images/brain.svg"


export default function SkillCard() {

  return <div className="backdrop-blur-xs shadow-md
    shadow-emerald-950 rounded-md flex flex-col 
    items-center w-50 min-h-50 hover:bg-accent
    text-center px-2 text-neutral-100">
    <img src={brain} width={150} />
    <p>I think. (better than you)</p>
  </div>
}
