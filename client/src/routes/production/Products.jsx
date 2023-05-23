import Nav from "../../components/Nav";
import Main from "../../components/Main";
import "./products.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/main");
        const data = response.data.allData;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="app">
      <Nav />
      <Main data={data} />
    </div>
  );
};

export default Products;
