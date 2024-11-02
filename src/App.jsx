import "./App.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout";
import { ToastContainer } from "react-toastify";

//pages
import Home from "./pages/homePage/Home";
import Collection from "./pages/collectionPage/Collection";
import About from "./pages/aboutPage/About";
import Contact from "./pages/contactPage/Contact";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <>
      <div className="container">
        <RouterProvider router={routes} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
