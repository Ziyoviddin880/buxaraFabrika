import "./collection.scss";
import { winter } from "../../data/winter";
import { autumn } from "../../data/autumn";
import { summer } from "../../data/summer";
import { useState } from "react";
import ProductMap from "../../Components/productMap/ProductMap";

const Collection = () => {
  const allData = [...winter, ...autumn, ...summer];
  const [data, setData] = useState(allData);
  const [active, setactive] = useState(1);
  const [search, setSearch] = useState("");
  const [prev, setPrev] = useState(allData);

  const chooseCategory = (word) => {
    if (word === "winter") {
      setData(winter);
      setPrev(winter);
      setactive(2);
    } else if (word === "autumn") {
      setactive(3);
      setPrev(autumn);
      setData(autumn);
    } else if (word === "summer") {
      setData(summer);
      setPrev(summer);
      setactive(4);
    } else {
      setData(allData);
      setPrev(allData);
      setactive(1);
    }
  };

  // console.log(prev);

  const searchData = (e) => {
    setSearch(e.target.value);

    if (e.target.value) {
      const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      setData(filteredData);
    } else {
      setData(prev);
    }
  };

  return (
    <section className="collectionPage">
      <div className="collectionBox">
        <div className="left-side">
          <div className="search">
            <input
              value={search}
              onChange={searchData}
              type="text"
              placeholder="Qidiruv"
            />
          </div>

          <div className="category">
            <h1>To'plam</h1>
            <ul>
              <li>
                <a
                  className={active === 1 ? "active" : ""}
                  onClick={() => chooseCategory("all")}
                >
                  Barcha kolleksiyalar
                </a>
              </li>
              <li>
                <a
                  className={active === 2 ? "active" : ""}
                  onClick={() => chooseCategory("winter")}
                >
                  Qishki kolleksiyalar
                </a>
              </li>
              <li>
                <a
                  className={active === 4 ? "active" : ""}
                  onClick={() => chooseCategory("summer")}
                >
                  Yozgi kolleksiyalar
                </a>
              </li>
              <li>
                <a
                  className={active === 3 ? "active" : ""}
                  onClick={() => chooseCategory("autumn")}
                >
                  Kuzgi kolleksiyalar
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          {data.map((item) => (
            <ProductMap key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
