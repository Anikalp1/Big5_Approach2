import React from "react";
import Section from "../Sections/Section";
import { Box } from "@mui/material";
import InfoCard from "../Sections/Card";
import { NeuroticismData, Explanation } from "../Data/NeuroticismData";

const Extraversion = () => {
  const { categories, series, data, title, description } = NeuroticismData;

  return (
    <Box>
      <Section
        title={title}
        description={description}
        categories={categories}
        data={series}
      >
        {Explanation}
      </Section>

      {data.map((item, index) => (
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

export default Extraversion;
