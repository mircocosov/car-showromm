import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMain from "./HomeMain";
import HomeFilters from "./HomeFilters";
import "@/pages/Home/Home.scss";
import { useState } from "react";

export default function Home() {
  const [modificationId, setModificationId] = useState<string | null>(null);
  return (
    <div className={"Home__container"}>
      <HomeHeader />
      <HomeMain modificationId={modificationId} />
      <HomeFilters
        modificationId={modificationId}
        setModificationId={setModificationId}
      />
    </div>
  );
}
