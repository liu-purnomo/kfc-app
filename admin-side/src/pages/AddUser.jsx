import PageTitle from "../components/PageTitle";
import FormAddUser from "../components/formAddUser";
import setTitle from "../utils/setTitle";

function AddUser() {
  const buttonInfo = {
    name: "Back to list user",
    link: "/list-user",
  };

  const pageTitle = "Add New User";
  setTitle(pageTitle);
  return (
    <div className="row">
      <PageTitle pageTitle={pageTitle} buttonInfo={buttonInfo} />
      <div className="col-12 mb-4">
        <div className="card border-0 shadow components-section">
          <div className="card-body">
            <div className="row mb-4">
              <FormAddUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
