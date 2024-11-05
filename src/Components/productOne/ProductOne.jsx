import "./productOne.scss";
import { winter } from "../../data/winter";
import { autumn } from "../../data/autumn";
import { summer } from "../../data/summer";
import { useParams } from "react-router-dom";

const ProductOne = () => {
  const { id } = useParams();
  const allProduct = [...winter, ...autumn, ...summer];

  const oneData = allProduct.find((item) => {
    return item.id === Number(id);
  });

  return (
    <div className="productOne">
      <div className="left-side">
        <img src={oneData.img} alt={oneData.name} />
      </div>
      <div className="right-side">
        <h1>{oneData.name}</h1>
        <table>
          <tbody>
            <tr>
              <td>Material</td>
              <td>100% paxta</td>
            </tr>
            <tr>
              <td>Yostiq kiyimi</td>
              <td>50x70 (2dona)</td>
            </tr>
            <tr>
              <td>Ko'rpa to'shak</td>
              <td>100x200 (2 dona)</td>
            </tr>
            <tr>
              <td>choyshab</td>
              <td>150x250 (1dona)</td>
            </tr>
            <tr>
              <td>Hajmi</td>
              <td>maxsus o'lcham</td>
            </tr>
            <tr>
              <td>Ishlab chiqaruvchi</td>
              <td>Buxoro tabiiy mahsuloti</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductOne;
