import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../components/PageTitle";
import RowTableCategories from "../components/RowTableCategories";
import setTitle from "../utils/setTitle";
import { useEffect, useState } from "react";
import { actionCategoriesGet } from "../actions/actionCreator";
import Loading from "../components/Loading";

function Categories() {
  const { categories, isLoading, isError, errorMessage } = useSelector(
    (state) => state.categories
  );

  const [loading, setLoading] = useState(true);

  const dispacther = useDispatch();

  const pageTitle = "List Categories";
  setTitle(pageTitle);

  const buttonInfo = {
    name: "Add new category",
    link: "/add-category",
  };

  useEffect(() => {
    dispacther(actionCategoriesGet());
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      <PageTitle pageTitle={pageTitle} buttonInfo={buttonInfo} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="card border-0 shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-centered table-nowrap mb-0 rounded">
                  <thead className="thead-light text-center">
                    <tr>
                      <th className="border-0 rounded-start">#</th>
                      <th className="border-0">Title</th>
                      <th className="border-0 rounded-end"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.categories?.map((category) => (
                      <RowTableCategories
                        category={category}
                        key={category.id}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Categories;
