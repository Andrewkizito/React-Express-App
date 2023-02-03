import { Route } from "@mui/icons-material";
import { ReactElement } from "react";
import Admin from "../pages/admin/Admin";
import Login from "../pages/admin/auth/Login";
import Products from "../pages/client/Products/Products";

type Route = {
  title: string;
  path: string;
  component: ReactElement;
  nested?: {
    path: string;
    component: ReactElement;
  }[];
};

const routes: Route[] = [
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
    ],
  },
];

export default routes;
