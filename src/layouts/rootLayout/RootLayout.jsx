import { Outlet } from "react-router-dom";
import "./rootLayout.scss";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
