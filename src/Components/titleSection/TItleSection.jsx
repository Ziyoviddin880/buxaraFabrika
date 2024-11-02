import "./titleSection.scss";

const TItleSection = ({ title }) => {
  return (
    <div data-aos="fade-up" className="titleSection">
      <h1>{title}</h1>
      <p>Buxoro tabiiy mahsuloti</p>
    </div>
  );
};

export default TItleSection;
