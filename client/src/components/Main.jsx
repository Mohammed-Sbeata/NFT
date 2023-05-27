import { useState, useEffect } from "react";
import "./main.css";
import certified from "../assets/images/certified.png";
import axios from "axios";

const Main = ({ data }) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(data);
  }, [data]);

  const changeLike = async (id) => {
    try {
      const response = await axios.post("/api/postCart", { id });
      const updatedData = response.data.data;
      setCartData((prevData) =>
        prevData.map((obj) => {
          if (obj.id === id) {
            return {
              ...obj,
              likes: updatedData[0].likes,
            };
          }
          return obj;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      {cartData.map((obj) => (
        <div className="card" key={obj.id}>
          <img alt="image" src={obj.image} />
          <name>
            {obj.title}
            <img className="certified" src={certified} alt="certified" />
          </name>
          <description>
            <right>
              <label>Volume </label>
              <span>{+obj.price}M USD</span>
            </right>
            <left>
              <label>Floor Price </label>
              <span>150 USD</span>
            </left>
          </description>
          <i
            className={
              obj.likes === "true"
                ? "fa-solid fa-heart like"
                : "fa-solid fa-heart"
            }
            onClick={() => changeLike(obj.id)}
          ></i>
        </div>
      ))}
    </main>
  );
};

export default Main;
