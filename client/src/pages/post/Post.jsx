import React from "react";
import Topbar from "../../components/topbar/Topbar";
import { Box, Container, Grid } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
// import dotenv from 'dotenv';
// dotenv.config();

export const Post = () => {
  // console.log(REACT_APP_GOOGLE_MAP_API);
  return (
    <div>
      <Topbar />
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item={6}>
            <TextField
              sx={{ mb: 1 }}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item={6}>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              loading={false}
              color="primary"
              variant="outlined"
            >
              場所を入力して検索
            </LoadingButton>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Box>
              <iframe
                style={{
                  width: "100%",
                  height: "450px",
                  border: "0",
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API}&q=Space+Needle,Seattle+WA`}
              ></iframe>
            </Box>
            {process.env.REACT_APP_GOOGLE_MAP_API}
            API☝️
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <TextField
                sx={{ mb: 4 }}
                fullWidth
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={15}
                defaultValue="Default Value"
                variant="filled"
              />
            </Box>
            <LoadingButton
              fullWidth
              type="submit"
              loading={false}
              color="primary"
              variant="contained"
            >
              場所を入力して検索
            </LoadingButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
