import "./Image.module.scss";

interface Props {
  src: string;
  alt?: string;
}

export default function Image({ src, alt = "Select car" }: Props) {
  return <img src={src} alt={alt} className="Image" />;
}
