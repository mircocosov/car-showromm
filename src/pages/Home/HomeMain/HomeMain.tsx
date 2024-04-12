import "./HomeMain.scss";
import { carModificationsData } from "@/api/data/car-modification";

interface Props {
  modificationId: string | null;
}

export default function HomeMain({ modificationId }: Props) {
  return (
    <div className={"main__container"}>
      <div className="main__container__prefix">
        <span className={"main__prefix"}>FIND YOUR DREAM CAR</span>
      </div>

      <div className="main__info-block-with-image">
        <div className="image">
          <img
            src={carModificationsData[Number(modificationId) ?? 0].image}
            alt="Car"
            className="main__image"
          />
        </div>
        <div className="main__info-block">
          <p>
            Объем двигателя:{" "}
            {carModificationsData[Number(modificationId) ?? 0].engineVolume}
          </p>
          <p>
            Количество лошадинных сил:{" "}
            {carModificationsData[Number(modificationId) ?? 0].enginePower}
          </p>
          <p>
            Год выпуска:{" "}
            {carModificationsData[Number(modificationId) ?? 0].year}
          </p>
          <p>
            Разгон до 100 км/ч:{" "}
            {carModificationsData[Number(modificationId) ?? 0].acceleration}
          </p>
          <p>Цвет: {carModificationsData[Number(modificationId) ?? 0].color}</p>
        </div>
      </div>
    </div>
  );
}

// объем двигателя
// колво лошадинных сил
// цвет
// год выпуска
// разгон до 100
