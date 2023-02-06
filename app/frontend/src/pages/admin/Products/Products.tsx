//Importing helper modules
import { api } from "../../../utils/modules";
import { Product } from "../../../utils/types";
import { useEffect, useState } from "react";

//Importing core components
import Layout from "../core/Layout";
import Root from "./sections/Root";

const ProductsManager = () => {
  const [data, setData] = useState<null | Product[]>(null);

  useEffect(() => {
    api.get("/products").then((res) => setData(res.data));
  }, []);

  return (
    <Layout>
      <Root data={data} />
    </Layout>
  );
};

export default ProductsManager;
