import React from "react";
import Topbar from "../../components/topbar/Topbar";
import { Box, Container, Grid } from "@mui/material";
// import dotenv from 'dotenv';
// dotenv.config();

export const Post = () => {
  // console.log(REACT_APP_GOOGLE_MAP_API);
  return (
    <div>
      <Topbar />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box>
              <iframe
                style={{
                  width: "600px",
                  height: "450px",
                  border: "0",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key={process.env.REACT_APP_GOOGLE_MAP_API}&q=Space+Needle,Seattle+WA"
              ></iframe>
            </Box>
            {process.env.REACT_APP_GOOGLE_MAP_API}
            API☝️
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>xs=6 md=4</Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
