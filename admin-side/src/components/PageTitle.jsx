import { NavLink } from "react-router-dom";
import { PlusCircle } from "react-bootstrap-icons";

function PageTitle({ pageTitle, buttonInfo }) {
  return (
    <div className="py-4">
      <div className="d-flex justify-content-between w-100 flex-wrap">
        <div className="mb-3 mb-lg-0">
          <h1 className="h4">{pageTitle}</h1>
        </div>
        {pageTitle !== "Add Item" ? (
          <div>
            <NavLink to={buttonInfo.link}>
              <button className="btn btn-primary">
                <PlusCircle className="fw-bold fs-5 me-2" />
                {buttonInfo.name}
              </button>
            </NavLink>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default PageTitle;
