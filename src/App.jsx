import React, { useRef, useState } from "react";
import { Container, Box, Button, Typography, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Neuroticism from "./components/Categories/Neuroticism";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import BarChart from "./components/Charts/BarChart";
import PieChart from "./components/Charts/PieChart";
import RadarChart from "./components/Charts/RadarChart";
import Extraversion from "./components/Categories/Extraversion";
import OpennessToExperience from "./components/Categories/OpennessToExperience";
import Agreeableness from "./components/Categories/Agreeableness";
import Conscientiousness from "./components/Categories/Conscientiousness";

function App() {
  const ReportRef = useRef(null);
  const [generatingPDF, setGeneratingPDF] = useState(false);

  const handleExportPDF = () => {
    setGeneratingPDF(true);
    if (ReportRef.current) {
      html2canvas(ReportRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const padding = 2;
        let heightLeft = imgHeight;
        let position = padding;

        pdf.addImage(
          imgData,
          "PNG",
          padding,
          padding,
          imgWidth - 2 * padding,
          imgHeight - 2 * padding
        );
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(
            imgData,
            "PNG",
            padding,
            position + padding,
            imgWidth - 2 * padding,
            imgHeight - 2 * padding
          );
          heightLeft -= pageHeight;
        }

        pdf.save("Report.pdf");
        setGeneratingPDF(false);
      });
    }
  };

  return (
    <Container>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          my: "2rem",
          maxWidth: "1145px",
        }}
      >
        {!generatingPDF && (
          <Button
            onClick={handleExportPDF}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Download as PDF
          </Button>
        )}
      </Box>

      <Box ref={ReportRef}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          The Big Five Personality Test
        </Typography>
        <BarChart />
        <Box mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <PieChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <RadarChart />
            </Grid>
          </Grid>
        </Box>
        <Neuroticism />
        <Extraversion />
        <OpennessToExperience />
        <Agreeableness />
        <Conscientiousness />
      </Box>
    </Container>
  );
}

export default App;
