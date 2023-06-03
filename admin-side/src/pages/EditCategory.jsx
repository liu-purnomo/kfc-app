import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import setTitle from "../utils/setTitle";
import FormCategories from "../components/category";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function EditCategory() {
  const [loading, setLoading] = useState(true);
  const pageTitle = "Edit Category";
  setTitle(pageTitle);
  const { id } = useParams();
  const buttonInfo = {
    name: "Back to list category",
    link: "/categories",
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="row">
          <PageTitle pageTitle={pageTitle} buttonInfo={buttonInfo} />
          <div className="col-12 mb-4">
            <div className="card border-0 shadow components-section">
              <div className="card-body">
                <div className="row mb-4">
                  <FormCategories id={id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditCategory;
