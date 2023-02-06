import { AppRoute } from "./types";
import Admin from "../pages/admin/Admin";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Login from "../pages/admin/auth/Login";
import Products from "../pages/client/Products/Products";
import ProductsManager from "../pages/admin/Products/Products";

const routes: AppRoute[] = [
  {
    title: "Products",
    path: "/",
    component: <Products />,
  },
  {
    title: "Cart",
    path: "/cart",
    component: <Products />,
  },
  {
    title: "Track Order",
    path: "/track-order",
    component: <Products />,
  },
  {
    title: "Admin",
    component: <Admin />,
    path: "/admin",
    nested: [
      {
        path: "",
        component: <Login />,
      },
      {
        path: "dashboard",
        component: <Dashboard />,
      },
      {
        path: "products",
        component: <ProductsManager />,
      },
    ],
  },
];

export default routes;
