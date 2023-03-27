import React from "react";
import { Hero } from "../../components/hero/Hero";
import Topbar from "../../components/topber/Topbar";
import { Container } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Topbar />
      <Container maxWidth="lg">
        <Hero />
      </Container>
    </>
  );
};
