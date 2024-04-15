import { CarModification } from "@/types/car";
import { carModelsData } from "./car-models";

export const carModificationsData: CarModification[] = [
  {
    id: "0",
    startDate: new Date("2008-03-01T00:00Z"),
    endDate: new Date("2013-11-01T00:00Z"),
    model: carModelsData[21], //911
    image:
      "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelexplorer/normal/6bcbc899-51bd-11eb-80d1-005056bbdc38;sP;twebp/porsche-normal.webp",
    engineVolume: 1.8,
    enginePower: 300,
    year: 2010,
    acceleration: 2.1,
    color: "Синий",
  },
  {
    id: "1",
    startDate: new Date("2009-03-01T00:00Z"),
    endDate: new Date("2014-11-01T00:00Z"),
    model: carModelsData[22], //Panamera
    image:
      "https://files.porsche.com/filestore/image/multimedia/none/972-g3-v6-modelexplorer/normal/9537b7ad-c9c5-11ee-8116-005056bbdc38;sP;twebp/porsche-normal.webp",
    engineVolume: 2.0,
    enginePower: 310,
    year: 2012,
    acceleration: 2.1,
    color: "Серебристый",
  },
  {
    id: "2",
    startDate: new Date("2012-03-01T00:00Z"),
    endDate: new Date("2018-11-01T00:00Z"),
    model: carModelsData[23], //Cayenne
    image:
      "https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-modelexplorer-sideshot/normal/66377a26-8859-11ee-810c-005056bbdc38;sP;twebp/porsche-normal.webp",
    engineVolume: 1.8,
    enginePower: 300,
    year: 2010,
    acceleration: 2.1,
    color: "Циан",
  },
  {
    id: "3",
    startDate: new Date("2012-03-01T00:00Z"),
    endDate: new Date("2014-11-01T00:00Z"),
    model: carModelsData[24], //Macan
    image:
      "https://files.porsche.com/filestore/image/multimedia/none/pa3-r4-modelexplorer/normal/237e6fa9-7dec-11ec-80e9-005056bbdc38;sP;twebp/porsche-normal.webp",
    engineVolume: 1.8,
    enginePower: 300,
    year: 2010,
    acceleration: 2.1,
    color: "Темно-синий",
  },
  {
    id: "4",
    startDate: new Date("2014-03-01T00:00Z"),
    endDate: new Date("2020-11-01T00:00Z"),
    model: carModelsData[25], //Taycan
    image:
      "https://images-porsche.imgix.net/-/media/A476D89B333349D39A089152383C7E85_22CDF95F742F459BBA7DA94B27AD66BC_TA24Q3BIX0010-taycan-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format",
    engineVolume: 1.8,
    enginePower: 300,
    year: 2010,
    acceleration: 2.1,
    color: "Серебристый",
  },
  //Lamborgini
  {
    id:"5",
    startDate: new Date("2003-03-01T00:00Z"),
    endDate: new Date("2013-11-25T00:00Z"),
    model: carModelsData[0], //Gallardo
    image:
   "../public/images/Gallardo.png",
    engineVolume: 5.2,
    enginePower: 560,
    year: 2013,
    acceleration: 3.4,
    color: "Черный",
  },
  {
    id:"6",
    startDate: new Date("2014-03-01T00:00Z"),
    endDate: new Date(),
    model: carModelsData[1], //Huracan
    image:
   "../public/images/Huracan.png",
    engineVolume: 5.2,
    enginePower: 610,
    year: 2020,
    acceleration: 2.9,
    color: "Графит",
  },
  {
    id:"7",
    startDate: new Date("2011-01-01T00:00Z"),
    endDate: new Date("2021-01-01T00:00Z"),
    model: carModelsData[2], //Aventador
    image:
   "../public/images/Aventador.png",
    engineVolume: 6.5,
    enginePower: 770,
    year: 2021,
    acceleration: 2.8,
    color: "Серебристый",
  },
  {
    id:"8",
    startDate: new Date("2001-01-01T00:00Z"),
    endDate: new Date("2010-01-01T00:00Z"),
    model: carModelsData[3], //Murcielago
    image:
   "../public/images/Murcielago.png",
    engineVolume: 6.5,
    enginePower: 670,
    year: 2010,
    acceleration: 3.2,
    color: "Желтый",
  },
  {
    id:"9",
    startDate: new Date("1990-01-01T00:00Z"),
    endDate: new Date("2001-01-01T00:00Z"),
    model: carModelsData[4], //Diablo
    image:
   "../public/images/Diablo.png",
    engineVolume: 6.0,
    enginePower: 549,
    year: 2001,
    acceleration: 3.5,
    color: "Оранжевый",
  },

  {
    id:"10",
    startDate: new Date("2017-12-04T00:00Z"),
    endDate: new Date(),
    model: carModelsData[5], //Urus
    image:
   "../public/images/Urus.png",
    engineVolume: 4.0,
    enginePower: 600,
    year: 2020,
    acceleration: 3.6,
    color: "Желтый",
  },
 //Ferrari    -  6- F40 7-Purosangue 8-SF90 Stradale 9-488 10-812 Superfast
 
 {
  id:"11",
  startDate: new Date("1987-01-01T00:00Z"),
  endDate: new Date("1992-01-01T00:00Z"),
  model: carModelsData[6], //F40
  image:
 "../public/images/F40.png",
  engineVolume: 2.9,
  enginePower: 478,
  year: 1992,
  acceleration: 3.8,
  color: "Красный",
},
{
  id:"12",
  startDate: new Date("2022-09-13T00:00Z"),
  endDate: new Date(),
  model: carModelsData[7], //Purosangue
  image:
 "../public/images/Purosangue.png",
  engineVolume: 6.5,
  enginePower: 725,
  year: 2022,
  acceleration: 3.3,
  color: "Серебристый",
},
{
  id:"13",
  startDate: new Date("2020-11-01T00:00Z"),
  endDate: new Date("2022-12-01T00:00Z"),
  model: carModelsData[8], //SF90 Stradale
  image:
 "../public/images/SF90Stradale.png",
  engineVolume: 4.0,
  enginePower: 780,
  year: 2020,
  acceleration: 2.5,
  color: "Красный",
},
{
  id:"14",
  startDate: new Date("2015-03-01T00:00Z"),
  endDate: new Date("2019-01-01T00:00Z"),
  model: carModelsData[9], //488
  image:
 "../public/images/488.png",
  engineVolume: 3.9,
  enginePower: 720,
  year: 2018,
  acceleration: 2.8,
  color: "",
},
];
