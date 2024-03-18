import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMain from "./HomeMain";
import HomeFilters from "./HomeFilters";
import "@/pages/Home/Home.scss";

export default function Home() {
  return (
    <div className={"Home__container"}>
      <HomeHeader />
      <HomeMain />
      <HomeFilters />
    </div>
  );
}
