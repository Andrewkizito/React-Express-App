import { DeleteOutlineOutlined, Edit, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Product } from "../../../../utils/types";

const Listing = (props: { data: null | Product[] }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Products In Database.({props.data?.length})</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {props.data?.map((item) => (
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
      </AccordionDetails>
    </Accordion>
  );
};

export default Listing;
