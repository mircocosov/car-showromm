// import Image from "@/components/ui/Image/Image";

const getCarImage = (brand: string, model: string, year: string): string => {
  let imageUrl = "";

  if (brand === "Lamborghini" && model === "Gallardo" && year === "2021") {
    imageUrl =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lamborghini_Gallardo_silver.jpg/1200px-Lamborghini_Gallardo_silver.jpg";
  } else if (brand === "Mercedes" && model === "E-Class" && year === "2021") {
    imageUrl = "https://example.com/mercedes-e-class-2021.jpg";
  } else {
    imageUrl = "https://example.com/default-car-image.jpg";
  }

  return imageUrl;
};

export default function StartMain({
  brand,
  model,
  year,
}: {
  brand: string;
  model: string;
  year: string;
}) {
  const imageUrl = getCarImage(brand, model, year);

  return (
    <div>
      <span>find your dream car</span>
      <img src={imageUrl} alt="Car" />
    </div>
  );
}
