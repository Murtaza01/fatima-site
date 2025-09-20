interface props {
  path: string;
  extention: string;
  width?: number;
  style?: string;
}


export default function Image({ path, extention, width, style }: props) {

  return <picture>
    <source srcSet={`${import.meta.env.BASE_URL}images/${path}.avif`} type="image/avif" />
    <img src={`${import.meta.env.BASE_URL}images/${path}.${extention}`} width={width ? width : 100}
      className={style} />
  </picture>
}
