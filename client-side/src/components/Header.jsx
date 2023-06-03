import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-danger fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink className="navbar-brand text-light" to="/">
              <img
                src="https://files.kfcku.com/uploads/media/logo.png"
                width="75"
                alt=""
              ></img>
            </NavLink>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link  text-white"
                    aria-current="page"
                    to="/"
                  >
                    Homepage
                  </NavLink>
                </li>
              </ul>
              <a target="blank" href="https://dashboard-kfc.web.app/login">
                <button className="btn btn-light" type="submit">
                  Login Admin
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
