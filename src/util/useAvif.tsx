import { useEffect, useState } from "react";

export default function useAvif() {

  const [supportAvif, setSupportAvif] = useState<boolean>(false)

  useEffect(() => {
    const avif = new Image()

    avif.src = "/images/birdman.avif"
    avif.onload = () => setSupportAvif(true)
    avif.onerror = () => setSupportAvif(false)
  }, [])

  return supportAvif
}
