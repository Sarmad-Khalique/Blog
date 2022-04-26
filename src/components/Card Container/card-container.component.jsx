import React from "react";
import { Grid } from "@mui/material";
import CustomCard from "../Custom Card/custom-card.component";

const CardContainer = () => {
  return (
    <Grid container spacing={2} paddingX={2}>
      <Grid item md={3}>
        <CustomCard />
      </Grid>
      <Grid item md={3}>
        <CustomCard />
      </Grid>
      <Grid item md={3}>
        <CustomCard />
      </Grid>
      <Grid item md={3}>
        <CustomCard />
      </Grid>
      <Grid item md={3}>
        <CustomCard />
      </Grid>
    </Grid>
  );
};

export default CardContainer;
