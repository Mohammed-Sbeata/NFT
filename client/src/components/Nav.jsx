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
        {type ? (
          <div className="sign">
            <Link to="/login" className="button">
              <span></span>
              <span></span>
              <span></span>
              <span></span> sign in
            </Link>
            <Link to="/signup" className="btn">
              sign un
            </Link>
          </div>
        ) : (
          <i className="fa-solid fa-cart-shopping"></i>
        )}
      </nav>
    </>
  );
};

export default Nav;
