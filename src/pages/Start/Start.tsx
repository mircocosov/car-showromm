import StartHeader from "./StartHeader/StartHeader";
import StartMain from "./StartMain";
import StartFooter from "./StartFooter";

export default function Start() {
  return (
    <div>
      <StartHeader />
      <StartMain brand="Lamborgini" model="Gallardo" year="2021" />
      <StartFooter />
    </div>
  );
}
