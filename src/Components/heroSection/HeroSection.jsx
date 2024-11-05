import { useTranslation } from "react-i18next";
import "./heroSection.scss";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="heroSection">
      <img
        data-aos="fade-down"
        src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png"
        alt="Hero Img"
      />
      <div>
        <p data-aos="flip-left">{t("country")}</p> <br />
        <p data-aos="flip-left">Tabiiy</p> <br />
        <p data-aos="flip-left">MAHSULOTI</p>
      </div>
    </section>
  );
};

export default HeroSection;
