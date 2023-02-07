import { Grid, Paper } from "@mui/material";

const Cards = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ height: 200,bgcolor: "#0b132b" }}></Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ height: 200,bgcolor: "#0b132b" }}></Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ height: 200,bgcolor: "#0b132b" }}></Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ height: 200,bgcolor: "#0b132b" }}></Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ height: 200,bgcolor: "#0b132b" }}></Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ height: 200,bgcolor: "#0b132b" }}></Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ height: 400,bgcolor: "#0b132b" }}></Paper>
      </Grid>
    </Grid>
  );
};

export default Cards;
