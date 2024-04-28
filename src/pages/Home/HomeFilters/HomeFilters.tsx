import { useCarBrands } from "@/api/car-brands";
import { useCarClasses } from "@/api/car-classes";
import { useCarModels } from "@/api/car-models";
import { useCarModifications } from "@/api/car-modification";
import { useState } from "react";
import style from "./HomeFilters.module.scss";
import Select from "@/components/ui/Select";
import Modal from "./FiltersModal/FiltersModal";

interface Props {
  modificationId: string | null;
  setModificationId: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function HomeFilters({
  modificationId,
  setModificationId,
}: Props) {
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
    <div className={style.Home__ChooseCar__container}>
      <Select
        className={style.Home__ChooseCar__select}
        onChange={(val) => setClassId((val ?? null) as string | null)}
        value={classId ?? undefined}
        inputtable
        items={carClasses.map((class_) => ({
          key: class_.id,
          value: class_.name,
        }))}
        placeholder="class"
      />

      <Select
        className={style.Home__ChooseCar__select}
        onChange={(val) => setBrandId((val ?? null) as string | null)}
        value={brandId ?? undefined}
        inputtable
        items={carBrands.map((brand) => ({ key: brand.id, value: brand.name }))}
        placeholder="brand"
      />

      <Select
        className={style.Home__ChooseCar__select}
        onChange={(val) => setModelId((val ?? null) as string | null)}
        value={modelId ?? undefined}
        inputtable
        items={carModels.map((model) => ({ key: model.id, value: model.name }))}
        placeholder="model"
      />

      <Select
        className={style.Home__ChooseCar__select}
        onChange={(val) => setModificationId((val ?? null) as string | null)}
        value={modificationId ?? undefined}
        inputtable
        items={carModifications.map((modification) => ({
          key: modification.id,
          value: `${
            modification.startDate.getMonth() + 1
          }.${modification.startDate.getFullYear()} - ${
            modification.endDate.getMonth() + 1
          }.${modification.endDate.getFullYear()}`,
        }))}
        placeholder="modification"
      />
      <Modal />
    </div>
  );
}
