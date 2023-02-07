//Importing helper modules
import { useEffect, useState } from "react";
import { partitionData } from "../../../../utils/modules";
import { Product } from "../../../../utils/types";

//Importing core modules
import { DeleteOutlineOutlined, Edit, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";

const Listing = (props: { data: null | Product[],expanded: boolean,setOpen: Function }) => {
  const [ page,setPage ] = useState<number>(1)
  const [ products,setProducts ] = useState<null | Product[][]>(null)

  useEffect(() => {
    if(props.data) setProducts(partitionData(props.data, 3))
  }, [props.data])

  return (
    <Accordion sx={{bgcolor: "#0b132b"}} expanded={props.expanded} onChange={() => props.setOpen((prevState: boolean) => !prevState)}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography color="#94a9b1">Products In Database.({props.data?.length})</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {products && products[page - 1].map((item: Product) => (
            <Grid item xs={12} sm={6} md={4}>
              <Paper>
                <Box
                  height={200}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "& img": {
                      maxHeight: "90%",
                    },
                  }}
                >
                  <img src={item.imageUrl} alt="" />
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
                  <Typography
                    fontWeight={600}
                    textAlign={"center"}
                    fontSize={"1.1rem"}
                    variant="h3"
                  >
                    {item.title}
                  </Typography>
                  <Typography fontSize={"0.9rem"}>
                    {item.description}
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                      <Button fullWidth startIcon={<Edit />}>
                        Edit
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        fullWidth
                        color="error"
                        startIcon={<DeleteOutlineOutlined />}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        {products && <Pagination sx={{mt: "1rem"}} color="primary" count={products.length}/>}
      </AccordionDetails>
    </Accordion>
  );
};

export default Listing;
