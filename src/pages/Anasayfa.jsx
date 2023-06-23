import AnasayfaImage from "../assets/anasayfa-hamburger.jpeg";
import { Link } from "react-router-dom";

function Anasayfa() {
  return (
    <div className="hero-img">
      <h1>Burger 33</h1>
      <h4>Delicios Hamburgers</h4>
      <Link className="btn btn-danger" to="/menu">
        Sipariş
      </Link>
    </div>
  );
}

export default Anasayfa;
