import "./products.scss";

const ProductsSection = ({ data }) => {
  return (
    <section className="products">
      {data?.map((item) => (
        <div data-aos="zoom-in-up" key={item.id} className="productItem">
          <img loading="lazy" src={item.img} alt={item.name} />
          <p className="name">{item.name}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductsSection;
