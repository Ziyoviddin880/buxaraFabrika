import { useNavigate } from "react-router-dom";
import "./productMap.scss";

const ProductMap = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/product/" + item.id);
      }}
      data-aos="zoom-in-up"
      key={item.id}
      className="productItem"
    >
      <img loading="lazy" src={item.img} alt={item.name} />
      <p className="name">{item.name}</p>
    </div>
  );
};

export default ProductMap;
