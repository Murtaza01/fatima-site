interface props {
  path: string;
  extention: string;
  width?: number;
  style?: string;
}


export default function Image({ path, extention, width, style }: props) {


  return <picture>
    <source srcSet={`/images/${path}.avif`} type="image/avif" />
    <img src={`/images/${path}.${extention}`} width={width ? width : 100}
      className={style} />
  </picture>
}
