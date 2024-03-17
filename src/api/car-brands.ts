import { CarBrand, GetCarBrandsParams } from "@/types/car-brand";
import { carBrandsData } from "./data/car-brands";
import { carModelsData } from "./data/car-models";

export const useCarBrands = (params?: GetCarBrandsParams): CarBrand[] => {
  if (params?.classId) {
    return carBrandsData.filter((brand) =>
      carModelsData.some(
        (model) =>
          model.brand.id === brand.id && model.class.id === params.classId
      )
    );
  }

  return carBrandsData;
};
