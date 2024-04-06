import "./HomeMain.scss";
import { carModificationsData } from "@/api/data/car-modification";

interface Props {
  modificationId: string | null;
}

export default function HomeMain({ modificationId }: Props) {
  return (
    <div className={"main__container"}>
      <span className={"main__prefix"}>FIND YOUR DREAM CAR</span>
      <img
        src={carModificationsData[Number(modificationId) ?? 0].image}
        alt="Car"
        className="main__image"
      />
    </div>
  );
}
