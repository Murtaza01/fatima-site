import skills from "../assets/data/skills"
import SkillCard from "../components/SkillCard"

export default function() {


  return <div id="skills" className="mb-20 flex gap-4 flex-wrap justify-center items-center">
    {skills.map(({ img, title, width },index) => {
      return <SkillCard img={img} title={title} width={width} index={index} />
    })}
  </div>
}
