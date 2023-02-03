import { Route } from "@mui/icons-material";
import { ReactElement } from "react";
import Products from "../pages/Products/Products";

type Route = {
  title: string;
  path: string;
  component: ReactElement;
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
];

export default routes;
