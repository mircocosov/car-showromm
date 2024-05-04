import { CarModel } from "./car";

export interface CarModification {
  id: string;
  startDate: Date;
  endDate: Date;
  model: CarModel;
  image: string;
  engineVolume: number;
  enginePower: number;
  year: number;
  acceleration: number;
  color: string;
  price: number;
}

export interface GetCarModificationParams {
  brandId?: string;
  modelId?: string;
  imageId?: string;
}
