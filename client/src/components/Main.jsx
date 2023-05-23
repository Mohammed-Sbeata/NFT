import "./main.css";
import certified from "../assets/images/certified.png";

const Main = ({ data }) => {
  return (
    <main>
      {data.map((obj) => (
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
          <i className="fa-solid fa-heart"></i>
        </div>
      ))}
    </main>
  );
};

export default Main;
