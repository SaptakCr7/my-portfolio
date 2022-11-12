import "./header.css";
import logo from "../components/logo.png";

function header() {
  return (
    <div className="header ">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
      </div>
      <div>
        <a className="pulse" href="#">
          Contact
        </a>
      </div>
    </div>
  );
}
export default header;
