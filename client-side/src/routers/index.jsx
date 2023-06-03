import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import BaseLayout from "../pages/BaseLayout";
import Detail from "../pages/Detail.jsx";

const routers = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default routers;
