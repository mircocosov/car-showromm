import { CarBrand } from "./car-brand";

export interface CarClass {
  id: string;
  name: string;
}

export interface CarModel {
  id: string;
  name: string;
  brand: CarBrand;
  class: CarClass;
}

export interface CarModification {
  id: string;
  startDate: Date;
  endDate: Date;
  model: CarModel;
}
