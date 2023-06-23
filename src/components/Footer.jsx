import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer container-fluid">
      <footer className="py-3">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link px-2 text-body-secondary">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/hakkimizda"
              className="nav-link px-2 text-body-secondary"
            >
              Hakkımızda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/iletisim" className="nav-link px-2 text-body-secondary">
              İletişim
            </Link>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;
