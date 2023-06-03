import FormItem from "../components/FormItem";
import PageTitle from "../components/PageTitle";
import setTitle from "../utils/setTitle";

function AddItem() {
  const pageTitle = "Add Item";
  setTitle(pageTitle);
  const buttonInfo = {
    name: "Back to list item",
    link: "/",
  };
  return (
    <div className="row">
      <PageTitle pageTitle={pageTitle} buttonInfo={buttonInfo} />
      <div className="col-12 mb-4">
        <div className="card border-0 shadow components-section">
          <div className="card-body">
            <div className="row mb-4">
              <FormItem pageTitle={pageTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
