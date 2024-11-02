import "./mainSection.scss";

const MainSection = ({ img, bgColor }) => {
  return (
    <section
      data-aos="fade-up"
      style={{ backgroundColor: bgColor }}
      className="mainSection"
    >
      <div className="quality">
        <span>100%</span>
        <br />
        <span>Material sifati</span>
      </div>
      <img loading="lazy" src={img} alt="image" />
      <div className="mainInfo">
        <div className="title">"Buxoro tabiiy mahsuloti"</div>
        <p className="text">
          ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini
          ishlab chiqaradigan kompaniya bo'lib kelgan
        </p>
        <button>To'plam</button>
      </div>
    </section>
  );
};

export default MainSection;
