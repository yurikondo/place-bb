import React from "react";
import { Hero } from "../../components/hero/Hero";
import { Footer } from "../../components/footer/Footer";
import Topbar from "../../components/topbar/Topbar";
import { Container, Grid } from "@mui/material";
import PostCard from "../../components/postcard/PostCard";

export const Home = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth="lg">
        <Hero />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <PostCard>xs=6 md=8</PostCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PostCard>xs=6 md=4</PostCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PostCard>xs=6 md=4</PostCard>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};
