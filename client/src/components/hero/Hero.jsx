import { Box } from "@mui/material";
import React from "react";
import hero from "../../assets/images/hero.jpg";

export const Hero = () => {
  return (
    <Box sx={{ height: 300 }}>
      <img
        src={hero}
        alt="掲示板の画像"
        style={{ height: 400, width: "100%" }}
      />
    </Box>
  );
};
