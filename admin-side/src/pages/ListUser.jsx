import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import setTitle from "../utils/setTitle";
import { useDispatch, useSelector } from "react-redux";
import { actionUserGet } from "../actions/actionCreator";
import RowTableUser from "../components/RowTableUser";
import Loading from "../components/Loading";

function ListUser() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const pageTitle = "List User";
  const buttonInfo = {
    name: "Add new user",
    link: "/add-user",
  };

  const { users } = useSelector((state) => state.userGet);
  const dispacther = useDispatch();
  setTitle(pageTitle);
  useEffect(() => {
    dispacther(actionUserGet());
  }, []);
  return (
    <>
      <PageTitle pageTitle={pageTitle} buttonInfo={buttonInfo} />
      {loading ? (
        <Loading />
      ) : (
        <div className="card border-0 shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-centered table-nowrap mb-0 rounded">
                <thead className="thead-light text-center">
                  <tr>
                    <th className="border-0 rounded-start">Username</th>
                    <th className="border-0 w-25">Email</th>
                    <th className="border-0 text-truncate">Phone Number</th>
                    <th className="border-0">Address</th>
                    <th className="border-0 rounded-end">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user) => (
                    <RowTableUser user={user} key={user.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListUser;
