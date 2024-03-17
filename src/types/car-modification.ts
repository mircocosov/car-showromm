import { CarModel } from "./car";

export interface CarModification {
  id: string;
  startDate: Date;
  endDate: Date;
  model: CarModel;
}

export interface GetCarModificationParams {
  brandId?: string;
  modelId?: string;
}
