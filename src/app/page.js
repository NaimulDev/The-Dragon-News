"use client";

import LatestNews from "@/components/Ui/LatestNews";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews />
        </Grid>
        <Grid item xs={4}>
          <h1>sidebar</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
