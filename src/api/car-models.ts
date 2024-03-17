import { CarModel } from "@/types/car";
import { carModelsData } from "./data/car-models";
import { GetCarModelsParams } from "@/types/car-model";

export const useCarModels = (params?: GetCarModelsParams): CarModel[] => {
  if (params?.brandId && params?.classId) {
    return carModelsData.filter(
      (model) =>
        model.brand.id === params.brandId && model.class.id === params.classId
    );
  } else if (params?.brandId) {
    return carModelsData.filter((model) => model.brand.id === params.brandId);
  } else if (params?.classId) {
    return carModelsData.filter((model) => model.class.id === params.classId);
  }

  return carModelsData;
};
