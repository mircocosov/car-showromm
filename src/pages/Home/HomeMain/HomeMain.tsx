import "./HomeMain.scss";
import Image from "@/components/ui/Image/Image";

export default function HomeMain() {
  return (
    <div className={"main__container"}>
      <span className={"main__prefix"}>FIND YOUR DREAM CAR</span>
      <Image
        src={
          "https://s.drom.ru/4/reviews/photos/land_rover/range_rover_sport/big_85623_78427_add_1.jpg"
        }
        alt="Car"
      />
    </div>
  );
}
