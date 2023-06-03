import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function Layouts() {
  const [loading, setLoading] = useState(true);
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
        <>
          <Sidebar />
          <div className="content">
            <Outlet />
          </div>
        </>
      )}
    </>
  );
}

export default Layouts;
