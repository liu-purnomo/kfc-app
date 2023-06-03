import { NavLink } from "react-router-dom";
import { Command, Sliders, PersonCircle } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Sidebar() {
  const MySwal = withReactContent(Swal);
  const handleLogout = () => {
    localStorage.clear();
    MySwal.fire({
      html: <i>You are logged out</i>,
      icon: "info",
      timer: 1500,
      timerProgressBar: true,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
    });
  };
  return (
    <>
      <nav className="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
        <NavLink to={"/"} className="navbar-brand me-lg-5">
          <img className="navbar-brand-dark" src="../../kfc-icon.png" alt="" />
        </NavLink>
        <div className="d-flex align-items-center">
          <button
            className="navbar-toggler d-lg-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <nav
        id="sidebarMenu"
        className="sidebar d-lg-block bg-gray-800 text-white collapse"
        data-simplebar
      >
        <div className="sidebar-inner px-4 pt-3">
          <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
            <div className="collapse-close d-md-none">
              <a
                href="#sidebarMenu"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <svg
                  className="icon icon-xs"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <ul className="nav flex-column pt-3 pt-md-0">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link d-flex align-items-center">
                <span className="sidebar-icon">
                  <img
                    src="../../kfc-icon.png"
                    height="20"
                    width="20"
                    alt="Logo"
                  />
                </span>
                <span className=" ms-1 sidebar-text">
                  <img
                    src="https://files.kfcku.com/uploads/media/logo.png"
                    height="20"
                    alt="Logo"
                  />
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/"}
                id="dashboard-nav"
                className="nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <Command className="fs-4" />
                </span>
                <span className="sidebar-text">Dashboard</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"/categories"}
                id="job-nav"
                className="nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <Sliders className="fs-4" />
                </span>
                <span className="sidebar-text">Categories</span>
              </NavLink>
            </li>

            <li
              role="separator"
              className="dropdown-divider mt-4 mb-3 border-gray-700"
            ></li>
            <li className="nav-item">
              <NavLink
                to="/list-user"
                className="nav-link nav-link d-flex align-items-center"
              >
                <span className="sidebar-icon">
                  <PersonCircle className="fs-4" />
                </span>
                <span className="sidebar-text">List User</span>
              </NavLink>
            </li>
            <li className="nav-item" id="logout">
              <a
                onClick={handleLogout}
                href=""
                className="btn btn-secondary d-flex align-items-center justify-content-center btn-logout"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
