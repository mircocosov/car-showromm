import HomeMain from "./HomeMain";
import HomeFilters from "./HomeFilters";
import style from "./Home.module.scss";
import { useState } from "react";

export default function Home() {
  const [modificationId, setModificationId] = useState<string | null>(null);
  return (
    <div className={style.Home__container}>
      <HomeMain modificationId={modificationId} />
      <HomeFilters
        modificationId={modificationId}
        setModificationId={setModificationId}
      />
    </div>
  );
}