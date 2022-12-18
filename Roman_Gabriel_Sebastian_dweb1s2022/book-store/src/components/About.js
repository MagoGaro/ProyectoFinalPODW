import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          Aplicacion creada para el curso de  Tecno3F
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          By Gabriel Sebastian Roman
        </Typography>
      </Box>
    </div>
  );
};

export default About;
