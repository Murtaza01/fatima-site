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


export function checkAvif(setState){
const avif = new Image()
    avif.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAG1pZjFhdmlmAAAAAGF2M...";

    avif.onload = () => {
      setSupportAvif(true)
      console.log("support avif")
    }
    avif.onerror = () => {
      setSupportAvif(false)
      console.log("does not support avif")
    }

}
