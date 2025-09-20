import skills from "../assets/data/skills"
import SkillCard from "../components/SkillCard"

export default function() {


  return <div id="skills" className="flex gap-3 flex-wrap justify-center items-center px-1 sm:gap-7
    md:w-[740px]  md:mx-auto md:gap-10">
    {skills.map(({ path, title, width, des,extention }, index) => {
      return <SkillCard key={index} path={path} title={title}
        width={width} des={des} extention={extention} />
    })}
  </div>
}
