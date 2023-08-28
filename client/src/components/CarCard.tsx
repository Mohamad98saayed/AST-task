import { useNavigate } from "react-router-dom";

interface Images {
  url: string;
  publicId: string;
}

export interface CarCardData {
  _id: string;
  manufacturer: string;
  model: string;
  year: number;
  price: number;
  images: Images[];
}

const CarCard = ({
  manufacturer,
  model,
  year,
  price,
  images,
  _id,
}: CarCardData) => {
  const navigate = useNavigate();

  return (
    <div className="car-card">
      <img src={images[0].url} alt="" />
      <h3>
        {manufacturer} {model} {year}
      </h3>
      <p>{price} $</p>
      <button onClick={() => navigate(`/cars/${_id}`)}>preview</button>
    </div>
  );
};

export default CarCard;
