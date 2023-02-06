import { ReactElement } from "react";

export type AppRoute = {
  title: string;
  path: string;
  component: ReactElement;
  nested?: {
    path: string;
    component: ReactElement;
  }[];
};
export type Product = {
  title: string;
  description: string;
  details: string;
  price: number;
  imageUrl: string;
};
