export function scrollToSection(event: React.SyntheticEvent, setOpen?:
  React.Dispatch<React.SetStateAction<boolean>>) {

  event.preventDefault();
  const target = event.target as HTMLAnchorElement;
  const id = target?.hash.replace("#", "");
  const element = document.getElementById(id);
  element?.scrollIntoView({
    behavior: "smooth",
    block:"end"
  });
  if (setOpen) setOpen((prev) => !prev)
}

