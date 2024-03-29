import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Place BB
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        あなたのお気に入りの場所を投稿・シェアしよう📌
      </Typography>
    </Box>
  );
};
