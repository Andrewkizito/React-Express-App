import { Box, Button, Container, Grid, Typography } from "@mui/material";

const Carousel = () => {
  return (
    <Box
      p="3rem 1rem"
      sx={{
        "& img": {
          height: 500,
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item sm={12} md={6}>
            <img src={"/Banner.png"} />
          </Grid>
          <Grid item sm={12} md={6}>
            <Typography variant="h1" fontSize={"3rem"} fontWeight={600}>
              Shopping Taken To The Next Level.
            </Typography>
            <Typography m="1.5rem 0" variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              facilisis orci non enim condimentum, a volutpat nisl blandit.
              Integer quis iaculis lacus, sit amet maximus massa. In interdum
              risus lacus, vitae pulvinar massa dignissim eleifend.
            </Typography>
            <Box display={"flex"} gap="1rem">
              <Button size="large">Start Shopping</Button>
              <Button color="secondary" size="large">
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Carousel;
