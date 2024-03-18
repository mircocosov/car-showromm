import { GetCarModificationParams } from "@/types/car-modification";
import { carModificationsData } from "./data/car-modification";
import { CarModification } from "@/types/car";

export const useCarModifications = (
  params?: GetCarModificationParams
): CarModification[] => {
  if (params) {
    return carModificationsData.filter(
      (modification) =>
        (!params.modelId || modification.model.id === params.modelId) &&
        (!params.brandId || modification.model.brand.id === params.brandId)
    );
  }
  return carModificationsData;
};
