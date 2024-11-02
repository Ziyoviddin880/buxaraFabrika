import React from "react";
import HeroSection from "../../Components/heroSection/HeroSection";
import ServiceSection from "../../Components/serviceSection/ServiceSection";
import MainSection from "../../Components/mainSection/MainSection";
import TItleSection from "../../Components/titleSection/TItleSection";
import ProductsSection from "../../Components/productsSection/ProductsSection";
import { winter } from "../../data/winter";
import { autumn } from "../../data/autumn";
import { summer } from "../../data/summer";
import { news } from "../../data/news";
import NewsSection from "../../Components/newsSection/NewsSection";
const Home = () => {
  return (
    <div className="container">
      <HeroSection />
      <ServiceSection />
      <MainSection
        img={"https://www.bnpfabric.uz/wp-content/uploads/2024/02/111.png"}
        bgColor={"#616884"}
      />
      <TItleSection title={"Qish Kolleksiyasi"} />
      <ProductsSection data={winter} />
      <MainSection
        img={"https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-1.png"}
        bgColor={"#625686"}
      />
      <TItleSection title={"Kuz Kolleksiyasi"} />
      <ProductsSection data={autumn} />
      <MainSection
        img={"https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-2.png"}
        bgColor={"#307e7a"}
      />
      <TItleSection title={"Yoz Kolleksiyasi"} />
      <ProductsSection data={summer} />
      <TItleSection title={"Yangiliklar"} />
      <NewsSection data={news} />
    </div>
  );
};

export default Home;
