import React from "react";
import { Link } from "react-router-dom";
import kristyname from "../../photos/kristyname.png";
import "./Projects.css";
import { Container } from "@mui/material";

const Projects = () => {
  return (
    <div className="aboutme" id="aboutme">
      <Container maxWidth={false}>
       <h2> Here are some of my favorite projects </h2>
      </Container>
    </div>
  );
};
export default Projects;
