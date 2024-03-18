import { CarModification } from "@/types/car";
import { carModelsData } from "./car-models";

export const carModificationsData: CarModification[] = [
  {
    id: "0",
    startDate: new Date("2008-03-01T00:00Z"),
    endDate: new Date("2013-11-01T00:00Z"),
    model: carModelsData[0],
  },
];
