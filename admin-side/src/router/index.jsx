import { createBrowserRouter, redirect } from "react-router-dom";
import Layouts from "../pages/layouts";
import Dashboard from "../pages/Dashboard";
import AddItem from "../pages/AddItem";
import Categories from "../pages/Categories";
import Login from "../pages/Login";
import EditItem from "../pages/EditItem";
import AddUser from "../pages/AddUser";
import ListUser from "../pages/ListUser";
import NewCategory from "../pages/AddCategory";
import EditCategory from "../pages/EditCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/add-user",
        element: <AddUser />,
      },
      {
        path: "/list-user",
        element: <ListUser />,
      },
      {
        path: "/add-item",
        element: <AddItem />,
      },
      {
        path: "/edit-item/:id",
        element: <EditItem />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/add-category",
        element: <NewCategory />,
      },
      {
        path: "/edit-category/:id",
        element: <EditCategory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
