import { CarClass } from "./car";
import { CarBrand } from "./car-brand";

export interface CarModel {
  id: string;
  name: string;
  brand: CarBrand;
  class: CarClass;
}

export interface GetCarModelsParams {
  brandId?: string;
  classId?: string;
}
