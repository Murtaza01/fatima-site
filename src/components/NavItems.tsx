interface props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = ["home", "skills", "poems", "paintings", "favorite books", "about"]

export default function NavItems({ setOpen }: props) {

  function scrollToSection(event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const id = target?.hash.replace("#", "");
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    setOpen((prev) => !prev)
  }

  return <>
    {navItems.map((item) => {
      return <li onClick={scrollToSection}>
        <a href={`#${item}`}>{item}</a>
      </li>
    })}
  </>
}
