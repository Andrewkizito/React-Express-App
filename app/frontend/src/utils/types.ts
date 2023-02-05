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
