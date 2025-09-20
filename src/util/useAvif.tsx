import { useEffect, useState } from "react";

export default function useAvif() {

  const [supportAvif, setSupportAvif] = useState<boolean>(false)

  useEffect(() => {
    const avif = new Image()
    avif.src = "/images/birdman.avif"

    avif.onload = () => {
      setSupportAvif(true)
      console.log("support avif")
    }
    avif.onerror = () => {
      setSupportAvif(false)
      console.log("does not support avif")
    }
  }, [])

  return supportAvif
}
