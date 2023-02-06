import { ShoppingCartCheckout } from "@mui/icons-material";
import { Box, Button, Paper, Rating, Typography } from "@mui/material";
import { Product } from "../../utils/types";

const ProductCard = (props: { item: Product }) => {
  return (
    <Paper>
      <Box
        height={200}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& img": {
            maxHeight: "80%",
          },
        }}
      >
        <img src={props.item.imageUrl} alt="" />
      </Box>
      <Box
        p="2rem 2rem"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <Typography fontWeight={600} textAlign={"center"} fontSize={"1.1rem"} variant="h3">
          {props.item.title}
        </Typography>
        <Typography fontSize={"0.9rem"}>{props.item.description}</Typography>
        <Rating size="small" value={4.5} readOnly precision={0.5} />
        <Typography color="primary.main" fontSize={"1.6rem"}>
          ${props.item.price}
        </Typography>
        <Button startIcon={<ShoppingCartCheckout />}>Add To Cart</Button>
      </Box>
    </Paper>
  );
};

export default ProductCard;
