import { useCarBrands } from "@/api/car-brands";
import { useCarClasses } from "@/api/car-classes";
import { useCarModels } from "@/api/car-models";
import { useCarModifications } from "@/api/car-modification";
import { useState } from "react";
import "./HomeChooseCar.scss";

export default function HomeFilters() {
  const [classId, setClassId] = useState<string | null>(null);
  const [brandId, setBrandId] = useState<string | null>(null);
  const [modelId, setModelId] = useState<string | null>(null);

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
    <div className={"Home__ChooseCar__container"}>
      <select
        className={"Home__ChooseCar__select"}
        onChange={(event) => setClassId(event.target.value)}
      >
        {carClasses.map((class_) => (
          <option value={class_.id} key={class_.id}>
            {class_.name}
          </option>
        ))}
      </select>

      <select
        className={"Home__ChooseCar__select"}
        onChange={(event) => setBrandId(event.target.value)}
      >
        {carBrands.map((brand) => (
          <option value={brand.id} key={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>

      <select
        className={"Home__ChooseCar__select"}
        onChange={(event) => setModelId(event.target.value)}
      >
        {carModels.map((model) => (
          <option value={model.id} key={model.id}>
            {model.name}
          </option>
        ))}
      </select>

      <select className={"Home__ChooseCar__select"}>
        {carModifications.map((modification) => (
          <option value={modification.id} key={modification.id}>
            {modification.startDate.getMonth() + 1}
            {"."}
            {modification.startDate.getFullYear()}
            {" - "}
            {modification.endDate.getMonth() + 1}
            {"."}
            {modification.endDate.getFullYear()}
          </option>
        ))}
      </select>
    </div>
  );
}
