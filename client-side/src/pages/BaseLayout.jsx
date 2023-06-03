import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function BaseLayout() {
  return (
    <>
      <Header />
      <div>
        <div className="mb-4 mt-4 text-center">.</div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseLayout;
