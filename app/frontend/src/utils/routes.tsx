import { AppRoute } from "./types";
import Admin from "../pages/admin/Admin";
import Dashboard from "../pages/admin/auth/Dashboard";
import Login from "../pages/admin/auth/Login";
import Products from "../pages/client/Products/Products";

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
        path: "login",
        component: <Login />,
      },
      {
        path: "dashboard",
        component: <Dashboard />,
      },
    ],
  },
];

export default routes;
