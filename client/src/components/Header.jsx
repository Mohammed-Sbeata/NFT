import "./header.css";
import face from "../assets/videos/landing_page_3.mp4";

const Header = () => {
  return (
    <div className="parent-vd">
      <div className="parent-vd1">
        <video src={face} autoPlay muted loop></video>
      </div>
    </div>
  );
}

export default Header;
