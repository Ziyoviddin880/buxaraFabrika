import "./service.scss";

const ServiceSection = () => {
  return (
    <section data-aos="fade-up" className="service">
      <div className="service-item">
        <img
          src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_delivery_1095359.svg"
          alt="Img"
        />
        <div>
          <p>Yetkazib berish bepul</p>
          <p>Barcha buyurtmalar uchun bepul yetkazib berish</p>
        </div>
      </div>
      <div className="service-item">
        <img
          src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_guarantee_952398.svg"
          alt="img"
        />
        <div>
          <p>Qaytish kafolati</p>
          <p>30 kunlik pulni qaytarish</p>
        </div>
      </div>
      <div className="service-item">
        <img
          src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/Group-995.svg"
          alt="img"
        />
        <div>
          <p>24/7 onlayn qo'llab-quvvatlash</p>
          <p>24/7 texnik yordam</p>
        </div>
      </div>
      <div className="service-item">
        <img
          src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Wallet_745515.svg"
          alt="img"
        />
        <div>
          <p>Xavfsiz to'lov</p>
          <p>Barcha to'lov usullari qabul qilinadi</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
