// Navlink ve Link componentları çoklu sayfa react uygulamalarında a tagi yerine kullanılır.
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand p-3" to="/">
          <img src={logo} alt="" style={{ height: "60px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* to={"/"} probu hangi sayfanın urlesini belirliyor */}
              <NavLink className="nav-link" to={"/"}>
                Anasayfa
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/menu"}>
                Menü
              </NavLink>
            </li>
            <li className="nav-item">
              {/* to={"/"} probu hangi sayfanın urlesini belirliyor */}
              <NavLink className="nav-link" to={"/hakkimizda"}>
                Hakkımızda
              </NavLink>
            </li>
            <li className="nav-item">
              {/* to={"/"} probu hangi sayfanın urlesini belirliyor */}
              <NavLink className="nav-link" to={"/iletisim"}>
                İletişim
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
