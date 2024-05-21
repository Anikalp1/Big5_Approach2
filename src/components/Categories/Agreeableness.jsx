import React from "react";
import Section from "../Sections/Section";
import { Box } from "@mui/material";
import InfoCard from "../Sections/Card";
import { AgreeablenessData, Explanation } from "../Data/AgreeablenessData";

const Agreeableness = () => {
  return (
    <Box>
      <Section
        title={AgreeablenessData.title}
        description={AgreeablenessData.description}
        categories={AgreeablenessData.categories}
        data={AgreeablenessData.series}
      >
        {Explanation}
      </Section>

      {AgreeablenessData.data.map((item, index) => (
        <InfoCard
          key={index}
          title={item.title}
          score={item.score}
          paragraph={item.paragraph}
        />
      ))}
    </Box>
  );
};

export default Agreeableness;
