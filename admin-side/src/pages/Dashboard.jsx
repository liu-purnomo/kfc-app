import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../components/PageTitle";
import RowTableProduct from "../components/RowTableProduct";
import setTitle from "../utils/setTitle";
import { useEffect, useState } from "react";
import { actionItemGet } from "../actions/actionCreator";
import Loading from "../components/Loading";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const pageTitle = "Dashboard";
  setTitle(pageTitle);

  const buttonInfo = {
    name: "Add new item",
    link: "/add-item",
  };

  // menggunakna redux
  const { items, isLoading, isError, errorMessage } = useSelector(
    (state) => state.items
  );
  const dispacther = useDispatch();

  useEffect(() => {
    dispacther(actionItemGet());
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
                      <th className="border-0 w-25">Image</th>
                      <th className="border-0 text-truncate">Description</th>
                      <th className="border-0">Price</th>
                      <th className="border-0">Category</th>
                      <th className="border-0 rounded-end"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items?.items?.map((item) => (
                      <RowTableProduct item={item} key={item.id} />
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

export default Dashboard;
