import { CarModel } from "@/types/car";
import { carBrandsData } from "./car-brands";
import { carClassesData } from "./car-classes";

export const carModelsData: CarModel[] = [
  {
    id: "0",
    name: "Gallardo",
    brand: carBrandsData[0],
    class: carClassesData[0],
  },
  {
    id: "1",
    name: "S500",
    brand: carBrandsData[1],
    class: carClassesData[1],
  },
];

// Brands

// Lamborgini 0
// Mersedes-Benz 1

//Classes

// Спорткар 0
// Бизнес 1
