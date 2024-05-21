import React from "react";
import Section from "../Sections/Section";
import { Box } from "@mui/material";
import InfoCard from "../Sections/Card";
import { OpennessToExperienceData, Explanation } from "../Data/OpennessToExperienceData";

const Extraversion = () => {
  const { categories, series, data, title, description } = OpennessToExperienceData;

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
