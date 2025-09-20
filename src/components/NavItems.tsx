import { scrollToSection } from "../util/helpers";

interface props {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = ["home", "skills", "poems", "books", "paintings", "about"]

export default function NavItems({ setOpen }: props) {


  return <>
    {navItems.map((item,index) => {
      return <li key={index} className="hover:text-accent active:text-accent active:scale-90 transition-transform"
        onClick={(event) => scrollToSection(event, setOpen)}>
        <a href={`#${item}`}>{item}</a>
      </li>
    })}
  </>
}
