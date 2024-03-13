import { useState } from "react";

interface CarData {
  gipercar: { [brand: string]: { [model: string]: string[] } };
  sedan: { [brand: string]: { [model: string]: string[] } };
  suv: { [brand: string]: { [model: string]: string[] } };
  [key: string]: { [brand: string]: { [model: string]: string[] } };
}

const carsData: CarData = {
  gipercar: {
    Lamborghini: {
      Gallardo: ["2020", "2021"],
      Aventador: ["2019", "2020"],
    },
  },

  sedan: {
    Toyota: {
      Corolla: ["2019", "2020"],
      Camry: ["2018", "2019"],
    },

    Honda: {
      Civic: ["2017", "2018"],
      Accord: ["2016", "2017"],
    },
  },

  suv: {
    Ford: {
      Escape: ["2018", "2019"],
      Explorer: ["2017", "2018"],
    },

    Jeep: {
      Wrangler: ["2019", "2020"],
      Cherokee: ["2018", "2019"],
    },
  },
};

export default function StartFooter() {
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string>("");

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand);
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <select
        value={selectedType}
        onChange={(event) => handleTypeChange(event.target.value)}
      >
        <option value="">Select Type</option>
        {Object.keys(carsData).map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <select
        value={selectedBrand}
        onChange={(event) => handleBrandChange(event.target.value)}
      >
        <option value="">Select Brand</option>
        {selectedType &&
          Object.keys(carsData[selectedType]).map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
      </select>

      <select
        value={selectedModel}
        onChange={(event) => handleModelChange(event.target.value)}
      >
        <option value="">Select Model</option>
        {selectedBrand &&
          Object.keys(carsData[selectedType][selectedBrand]).map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
      </select>

      <select
        value={selectedYear}
        onChange={(event) => handleYearChange(event.target.value)}
      >
        <option value="">Select Year</option>
        {selectedModel &&
          carsData[selectedType][selectedBrand][selectedModel].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
      </select>
    </div>
  );
}
