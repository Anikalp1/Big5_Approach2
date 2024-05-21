import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import BarChart from "../Charts/BarChart";
import PieChart from "../Charts/PieChart";
import RadarChart from "../Charts/RadarChart";

const Section = ({ title, description, categories, data, children }) => {


  return (
    <Box sx={{ pt: "4rem", borderTop: "1px solid #e0e0e0" }}>
      <Typography
        variant="h5"
        className="Title"
        sx={{ fontWeight: "500", color: "primary.grey", mb: "0.5rem" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        className="SubTitle"
        sx={{ fontWeight: "400", color: "primary.grey" }}
      >
        {description}
      </Typography>
      <Box
        variant="body1"
        sx={{
          color: "primary.grey",
          my: "2rem",
        }}
      >
        {children}
      </Box>
     
      <BarChart categories={categories} data={data} />
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <PieChart categories={categories} data={data} />
          </Grid>
          <Grid item xs={12} md={6}>
            <RadarChart categories={categories} data={data} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Section;
