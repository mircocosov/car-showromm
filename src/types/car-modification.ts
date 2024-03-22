import { CarModel } from "./car";

export interface CarModification {
  id: string;
  startDate: Date;
  endDate: Date;
  model: CarModel;
  image: string;
}

export interface GetCarModificationParams {
  brandId?: string;
  modelId?: string;
  imageId?: string;
}
