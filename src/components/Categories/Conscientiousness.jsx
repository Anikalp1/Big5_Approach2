import React from "react";
import Section from "../Sections/Section";
import { Box } from "@mui/material";
import InfoCard from "../Sections/Card";
import { ConscientiousnessData, Explanation } from "../Data/ConscientiousnessData";

const Conscientiousness = () => {
  const { categories, series } = ConscientiousnessData;

  return (
    <Box>
      <Section
        title={ConscientiousnessData.title}
        description={ConscientiousnessData.description}
        categories={categories}
        data={series}
      >
        {Explanation}
      </Section>

      {ConscientiousnessData.data.map((item, index) => (
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

export default Conscientiousness;
