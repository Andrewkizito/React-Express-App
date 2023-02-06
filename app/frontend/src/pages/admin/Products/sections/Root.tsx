import React from "react";
import { Product } from "../../../../utils/types";
import Listing from "./Listing";

const Root = (props: { data: Product[] | null }) => {
  return (
    <>
      <Listing data={props.data} />
    </>
  );
};

export default Root;
