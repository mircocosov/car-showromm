type inputType =
  | "text"
  | "email"
  | "tel"
  | "number"
  | "password"
  | "search"
  | "url";

interface Props {
  type?: inputType;
}

export default function Input({ type = "text" }: Props) {
  return <input type={type} />;
}
