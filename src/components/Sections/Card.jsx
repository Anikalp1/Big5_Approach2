import React from "react";
import { Box, Typography } from "@mui/material";

/* 
Usage:

   <InfoCard 
        title="Anxiety"
        score="20 (high)"
        paragraph="The 'fight-or-flight' system of the brain of anxious individuals is too easily and too often engaged. Therefore, people who are high in anxiety often feel like something dangerous is about to happen. They may be afraid of specific situations or be just generally fearful. They feel tense, jittery, and nervous. Persons low in Anxiety are generally calm and fearless."
    />
*/
const InfoCard = ({ title, score, paragraph }) => {
  return (
    <Box
      sx={{
        py: "0.7rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.1rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "400", color: "primary.grey" }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontWeight: "600", color: "primary.grey" }}>
       score: {score}
      </Typography>
      <Typography sx={{ fontWeight: "400", color: "primary.grey" }}>
        {paragraph}
      </Typography>
    </Box>
  );
};

export default InfoCard;
