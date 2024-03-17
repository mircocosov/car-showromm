import { CarModification } from "@/types/car";
import { carModelsData } from "./car-models";

export const carModificationsData: CarModification[] = [
  {
    id: "0",
    startDate: new Date("2008-03-01T00:00Z"),
    endDate: new Date("2013-11-01T00:00Z"),
    model: carModelsData[0],
  },
  {
    id: "1",
    startDate: new Date("2005-01-01T00:00Z"),
    endDate: new Date("2013-01-01T00:00Z"),
    model: carModelsData[1],
  },
];

// Models

//Ламборгини Галардо 0
//Мерседес С500 1
