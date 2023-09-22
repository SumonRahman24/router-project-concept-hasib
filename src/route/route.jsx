import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Profile from "../pages/Dashboard/Profile";
import EditProfile from "../pages/Dashboard/EditProfile";
import DashboardLayout from "./../layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/profile",
            element: <Profile />,
          },
          {
            path: "/dashboard/editProfile",
            element: <EditProfile />,
          },
        ],
      },
    ],
  },
]);

export default router;
