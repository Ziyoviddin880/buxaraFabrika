import "./heroSection.scss";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <img
        data-aos="fade-down"
        src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png"
        alt="Hero Img"
      />
      <div>
        <p data-aos="flip-left">Buxoro</p> <br />
        <p data-aos="flip-left">Tabiiy</p> <br />
        <p data-aos="flip-left">MAHSULOTI</p>
      </div>
    </section>
  );
};

export default HeroSection;
