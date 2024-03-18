import { useCarBrands } from "@/api/car-brands";
import { useCarClasses } from "@/api/car-classes";
import { useCarModels } from "@/api/car-models";
import { useCarModifications } from "@/api/car-modification";
import { useState } from "react";
import "./HomeFilters.scss";
import Select from "@/components/ui/Select";

export default function HomeFilters() {
  const [classId, setClassId] = useState<string | null>(null);
  const [brandId, setBrandId] = useState<string | null>(null);
  const [modelId, setModelId] = useState<string | null>(null);
  const [modificationId, setModificationId] = useState<string | null>(null);

  const carClasses = useCarClasses();
  const carBrands = useCarBrands({ classId: classId ?? undefined });
  const carModels = useCarModels({
    brandId: brandId ?? undefined,
    classId: classId ?? undefined,
  });

  const carModifications = useCarModifications({
    brandId: brandId ?? undefined,
    modelId: modelId ?? undefined,
  });

  return (
    <div className="Home__ChooseCar__container">
      <Select
        className="Home__ChooseCar__select"
        onChange={setClassId}
        items={carClasses.map((class_) => ({
          key: class_.id,
          value: class_.name,
        }))}
      />

      <Select
        className="Home__ChooseCar__select"
        onChange={setBrandId}
        items={carBrands.map((brand) => ({ key: brand.id, value: brand.name }))}
      />

      <Select
        className="Home__ChooseCar__select"
        onChange={setModelId}
        items={carModels.map((model) => ({ key: model.id, value: model.name }))}
      />

      <Select
        className="Home__ChooseCar__select"
        onChange={setModificationId}
        items={carModifications.map((modification) => ({
          key: modification.id,
          value: `${
            modification.startDate.getMonth() + 1
          }.${modification.startDate.getFullYear()} - ${
            modification.endDate.getMonth() + 1
          }.${modification.endDate.getFullYear()}`,
        }))}
      />
    </div>
  );
}
