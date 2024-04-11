import { CarModification } from "@/types/car";
import { carModelsData } from "./car-models";

export const carModificationsData: CarModification[] = [
  {
    id: "0",
    startDate: new Date("2008-03-01T00:00Z"),
    endDate: new Date("2013-11-01T00:00Z"),
    model: carModelsData[21],
    image:
      "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelexplorer/normal/6bcbc899-51bd-11eb-80d1-005056bbdc38;sP;twebp/porsche-normal.webp",
    engineVolume: 1.8,
    enginePower: 300,
    year: 2010,
    acceleration: 2.1,
    color: "green",
  },
  {
    id: "1",
    startDate: new Date("2009-03-01T00:00Z"),
    endDate: new Date("2014-11-01T00:00Z"),
    model: carModelsData[22],
    image:
      "https://files.porsche.com/filestore/image/multimedia/none/972-g3-v6-modelexplorer/normal/9537b7ad-c9c5-11ee-8116-005056bbdc38;sP;twebp/porsche-normal.webp",
    engineVolume: 1.8,
    enginePower: 300,
    year: 2010,
    acceleration: 2.1,
    color: "green",
  },
  {
    id: "2",
    startDate: new Date("2012-03-01T00:00Z"),
    endDate: new Date("2018-11-01T00:00Z"),
    model: carModelsData[23],
    image:
      "https://files.porsche.com/filestore/image/multimedia/none/e3-2nd-cayenne-modelexplorer-sideshot/normal/66377a26-8859-11ee-810c-005056bbdc38;sP;twebp/porsche-normal.webp",
    engineVolume: 1.8,
    enginePower: 300,
    year: 2010,
    acceleration: 2.1,
    color: "green",
  },
  {
    id: "3",
    startDate: new Date("2012-03-01T00:00Z"),
    endDate: new Date("2014-11-01T00:00Z"),
    model: carModelsData[24],
    image:
      "https://files.porsche.com/filestore/image/multimedia/none/pa3-r4-modelexplorer/normal/237e6fa9-7dec-11ec-80e9-005056bbdc38;sP;twebp/porsche-normal.webp",
    engineVolume: 1.8,
    enginePower: 300,
    year: 2010,
    acceleration: 2.1,
    color: "green",
  },
  {
    id: "4",
    startDate: new Date("2014-03-01T00:00Z"),
    endDate: new Date("2020-11-01T00:00Z"),
    model: carModelsData[25],
    image:
      "https://images-porsche.imgix.net/-/media/A476D89B333349D39A089152383C7E85_22CDF95F742F459BBA7DA94B27AD66BC_TA24Q3BIX0010-taycan-side?w=1400&q=85&crop=faces%2Centropy%2Cedges&auto=format",
    engineVolume: 1.8,
    enginePower: 300,
    year: 2010,
    acceleration: 2.1,
    color: "green",
  },
];
