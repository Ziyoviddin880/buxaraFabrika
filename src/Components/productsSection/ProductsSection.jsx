import ProductMap from "../productMap/ProductMap";
import "./products.scss";

const ProductsSection = ({ data }) => {
  return (
    <section className="products">
      {data?.map((item) => (
        <ProductMap key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductsSection;
