import { CarModel } from "@/types/car";
import { carBrandsData } from "./car-brands";
import { carClassesData } from "./car-classes";

export const carModelsData: CarModel[] = [
  {
    //Lamborghini
    id: "0",
    name: "Gallardo",
    brand: carBrandsData[0],
    class: carClassesData[0],
  },
  {
    id: "1",
    name: "Huracan",
    brand: carBrandsData[0],
    class: carClassesData[0],
  },
  {
    id: "2",
    name: "Aventador",
    brand: carBrandsData[0],
    class: carClassesData[0],
  },
  {
    id: "3",
    name: "Murcielago",
    brand: carBrandsData[0],
    class: carClassesData[0],
  },
  {
    id: "4",
    name: "Egoista",
    brand: carBrandsData[0],
    class: carClassesData[0],
  },
  {
    id: "5",
    name: "Urus",
    brand: carBrandsData[0],
    class: carClassesData[2],
  },
  //Ferrari
  {
    id: "6",
    name: "F40",
    brand: carBrandsData[1],
    class: carClassesData[0],
  },
  {
    id: "7",
    name: "Purosangue",
    brand: carBrandsData[1],
    class: carClassesData[0],
  },
  {
    id: "8",
    name: "SF90 Stradale",
    brand: carBrandsData[1],
    class: carClassesData[0],
  },
  {
    id: "9",
    name: "488",
    brand: carBrandsData[1],
    class: carClassesData[0],
  },
  {
    id: "10",
    name: "812 Superfast",
    brand: carBrandsData[1],
    class: carClassesData[0],
  },
  //Buggati
  {
    id: "11",
    name: "Chiron",
    brand: carBrandsData[2],
    class: carClassesData[0],
  },
  {
    id: "12",
    name: "Veyron",
    brand: carBrandsData[2],
    class: carClassesData[0],
  },
  {
    id: "13",
    name: "Divo",
    brand: carBrandsData[2],
    class: carClassesData[0],
  },
  {
    id: "14",
    name: "W16 Mistral",
    brand: carBrandsData[2],
    class: carClassesData[0],
  },
  {
    id: "15",
    name: "EB 110",
    brand: carBrandsData[2],
    class: carClassesData[0],
  },
  //Maserati
  {
    id: "16",
    name: "Ghibli",
    brand: carBrandsData[3],
    class: carClassesData[0],
  },
  {
    id: "17",
    name: "MC20",
    brand: carBrandsData[3],
    class: carClassesData[0],
  },
  {
    id: "18",
    name: "MC12",
    brand: carBrandsData[3],
    class: carClassesData[0],
  },
  {
    id: "19",
    name: "3200 GT",
    brand: carBrandsData[3],
    class: carClassesData[0],
  },
  {
    id: "20",
    name: "Levante",
    brand: carBrandsData[3],
    class: carClassesData[2], //SUV
  },
  //Porsche
  {
    id: "21",
    name: "911",
    brand: carBrandsData[4],
    class: carClassesData[0],
  },
  {
    id: "22",
    name: "Panamera",
    brand: carBrandsData[4],
    class: carClassesData[0],
  },
  {
    id: "23",
    name: "Cayenne",
    brand: carBrandsData[4],
    class: carClassesData[2], //SUV
  },
  {
    id: "24",
    name: "Macan",
    brand: carBrandsData[4],
    class: carClassesData[2], //Suv
  },
  {
    id: "25",
    name: "Taycan",
    brand: carBrandsData[4],
    class: carClassesData[0],
  },
  //Dodge
  {
    id: "26",
    name: "Challenger",
    brand: carBrandsData[5],
    class: carClassesData[0],
  },
  {
    id: "27",
    name: "Viper",
    brand: carBrandsData[5],
    class: carClassesData[0],
  },
  {
    id: "28",
    name: "RAM",
    brand: carBrandsData[5],
    class: carClassesData[2], //SUV
  },
  {
    id: "29",
    name: "Caravan",
    brand: carBrandsData[5],
    class: carClassesData[6], //Minivan
  },
  {
    id: "30",
    name: "Dart",
    brand: carBrandsData[5],
    class: carClassesData[4], //Sedan
  },
  //Mercedes
  {
    id: "31",
    name: "Maybach",
    brand: carBrandsData[6],
    class: carClassesData[1],
  },
  {
    id: "32",
    name: "S500",
    brand: carBrandsData[6],
    class: carClassesData[4],
  },
  {
    id: "33",
    name: "E63 AMG",
    brand: carBrandsData[6],
    class: carClassesData[4],
  },
  {
    id: "34",
    name: "Vito",
    brand: carBrandsData[6],
    class: carClassesData[6],
  },
  {
    id: "35",
    name: "A-Class",
    brand: carBrandsData[6],
    class: carClassesData[3],
  },
  //BMW
  {
    id: "36",
    name: "M8",
    brand: carBrandsData[7],
    class: carClassesData[0],
  },
  {
    id: "37",
    name: "X7",
    brand: carBrandsData[7],
    class: carClassesData[1],
  },
  {
    id: "38",
    name: "E90",
    brand: carBrandsData[7],
    class: carClassesData[4],
  },
  {
    id: "39",
    name: "5-Series",
    brand: carBrandsData[7],
    class: carClassesData[3],
  },
  {
    id: "40",
    name: "220D XDrive",
    brand: carBrandsData[7],
    class: carClassesData[6],
  },
  //Bentley
  {
    id: "41",
    name: "Continental",
    brand: carBrandsData[8],
    class: carClassesData[1],
  },
  {
    id: "42",
    name: "Bentayga",
    brand: carBrandsData[8],
    class: carClassesData[1],
  },
  {
    id: "43",
    name: "Flying Spure",
    brand: carBrandsData[8],
    class: carClassesData[1],
  },
  {
    id: "44",
    name: "Mulliner",
    brand: carBrandsData[8],
    class: carClassesData[1],
  },
  {
    id: "45",
    name: "Mulsanne",
    brand: carBrandsData[8],
    class: carClassesData[1],
  },
  //Audi
  {
    id: "46",
    name: "R8",
    brand: carBrandsData[9],
    class: carClassesData[0],
  },
  {
    id: "47",
    name: "A6",
    brand: carBrandsData[9],
    class: carClassesData[4],
  },
  {
    id: "48",
    name: "Q8",
    brand: carBrandsData[9],
    class: carClassesData[2],
  },
  {
    id: "49",
    name: "RS6",
    brand: carBrandsData[9],
    class: carClassesData[3],
  },
  {
    id: "50",
    name: "S8",
    brand: carBrandsData[9],
    class: carClassesData[4],
  },
  //Chrysler
];
