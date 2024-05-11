import { useEffect, useState } from "react";
import style from "./HomeMain.module.scss";
import { carModificationsData } from "@/api/data/car-modification";

interface Props {
  modificationId: string | null;
}

export default function HomeMain({ modificationId }: Props) {
  const [currentModificationId, setCurrentModificationId] =
    useState(modificationId);
  useEffect(() => {
    document
      .getElementsByClassName(style.main__image)[0]
      .classList.add(style.animated);
    document
      .getElementsByClassName(style.main__info_block)[0]
      .classList.add(style.animated);
    setTimeout(() => {
      document
        .getElementsByClassName(style.main__image)[0]
        .classList.remove(style.animated);
      document
        .getElementsByClassName(style.main__info_block)[0]
        .classList.remove(style.animated);

      setCurrentModificationId(modificationId);
    }, 1000);
  }, [modificationId]);

  return (
    <div className={style.main__container}>
      <div className={style.main__container__prefix}>
        <span className={style.main__prefix}>ПРИОБРЕТИТЕ МАШИНУ МЕЧТЫ</span>
      </div>
      <div className={style.main__info_block_with_image}>
        <div className={style.main_image_container}>
          <img
            src={carModificationsData[Number(currentModificationId) ?? 0].image}
            alt="Car"
            className={style.main__image}
          />
        </div>
        <div className={style.main__info_block}>
          <p>
            Объем двигателя :{" "}
            {
              carModificationsData[Number(currentModificationId) ?? 0]
                .engineVolume
            }{" "}
            л.
          </p>
          <p>
            Мощность:{" "}
            {
              carModificationsData[Number(currentModificationId) ?? 0]
                .enginePower
            }{" "}
            л.с.
          </p>
          <p>
            Год выпуска:{" "}
            {carModificationsData[Number(currentModificationId) ?? 0].year}
          </p>
          <p>
            Разгон до 100 км/ч:{" "}
            {
              carModificationsData[Number(currentModificationId) ?? 0]
                .acceleration
            }{" "}
            с.
          </p>
          <p>
            Цвет:{" "}
            {carModificationsData[Number(currentModificationId) ?? 0].color}
          </p>
          <p>
            Цена :{" "}
            {Intl.NumberFormat("ru-RU").format(
              carModificationsData[Number(currentModificationId) ?? 0].price
            )}{" "}
            ₽
          </p>
        </div>
      </div>
    </div>
  );
}
