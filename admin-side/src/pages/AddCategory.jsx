import FormCategory from "../components/FormAddCategory";
import PageTitle from "../components/PageTitle";
import setTitle from "../utils/setTitle";

function NewCategory() {
  const pageTitle = "Add New Category";
  setTitle(pageTitle);
  const buttonInfo = {
    name: "Back to list category",
    link: "/categories",
  };
  return (
    <div className="row">
      <PageTitle pageTitle={pageTitle} buttonInfo={buttonInfo} />
      <div className="col-12 mb-4">
        <div className="card border-0 shadow components-section">
          <div className="card-body">
            <div className="row mb-4">
              <FormCategory pageTitle={pageTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCategory;
