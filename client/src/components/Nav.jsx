import "./nav.css";
import { Link } from "react-router-dom";

const Nav = ({ type }) => {
  return (
    <>
      <nav className="Nav">
        <div className="name">
          <nft>N</nft>
          <nft>F</nft>
          <nft>T</nft>
        </div>
        {type !== "mainPage" ?
           <div className="logout">
             <Link to="/" className="btn">Logout</Link>
            </div>
        :
        <></>}
        {type === "mainPage" ? (
          <div className="sign">
            <Link to="/login" className="button">
              <span></span>
              <span></span>
              <span></span>
              <span></span> sign in
            </Link>
            <Link to="/signup" className="btn">
              sign up
            </Link>
            
          </div>
        ) : type === "cart" ? (
          <Link to="/main" className="fa-solid fa-igloo main"></Link>
        ) : (
          <Link to="/cart" className="fa-solid fa-cart-shopping"></Link>
        )}
      </nav>
    </>
  );
};

export default Nav;
