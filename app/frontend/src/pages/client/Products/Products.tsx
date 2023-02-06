import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../../utils/modules";
import { Product } from "../../../utils/types";
import ProductCard from "../../ui/ProductCard";
import Carousel from "./sections/Carousel";

const Products = () => {
  const [data, setData] = useState<null | Product[]>(null);

  useEffect(() => {
    api.get("/products").then((res) => setData(res.data));
  }, []);

  console.log(data);

  return (
    <Container maxWidth="lg">
      <Box p="3rem 0.4rem">
        <Carousel />
        <Grid container spacing={2}>
          {data?.map((item, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <ProductCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
