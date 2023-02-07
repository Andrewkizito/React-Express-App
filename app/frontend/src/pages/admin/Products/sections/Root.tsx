import React, { useState } from "react";
import { Product } from "../../../../utils/types";
import Form from "./Form";
import Listing from "./Listing";

const Root = (props: { data: Product[] | null }) => {
  const [ open,setOpen ] = useState<boolean>(false)

  return (
    <>
      <Listing data={props.data} expanded={open} setOpen={setOpen}/>
      <Form expanded={!open} setOpen={setOpen}/>
    </>
  );
};

export default Root;
