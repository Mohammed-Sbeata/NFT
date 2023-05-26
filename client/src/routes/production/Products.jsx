import Nav from "../../components/Nav";
import Main from "../../components/Main";
import "./products.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [role, setRole] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.post('/api/product', {title, image, price});
      setData(prevData => [...prevData, data.data])
    } catch(err) {
      console.log('somthing went wrong');
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/main");
        const data = response.data.allData;
        setData(data);
        setRole(response.data.role)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app products">
      <Nav />
      <div className="add-product">
        {role === 'admin' && <button onClick={() => setShowForm(!showForm)}>{showForm ? 'Hide' : 'Show'} Add NFT</button>}
        {showForm && <form onSubmit={handleSubmit}>
            <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="NFT Title"/>
            <input type="text" name='image' value={image} onChange={(e) => setImage(e.target.value)} placeholder="NFT Image"/>
            <input type="text" name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder="NFT price"/>
            <button type="submit">Add NFT</button>
          </form>}
      </div>
      <Main data={data} />
    </div>
  );
};

export default Products;
