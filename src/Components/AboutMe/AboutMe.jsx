import React from "react";
import { Link } from "react-router-dom";
import kristyname from "../../photos/kristyname.png";
import "./AboutMe.css";
import { Container } from "@mui/material";

const AboutMe = () => {
  return (
    <div className="aboutme" id="aboutme">
      <Container maxWidth={false}>
        <h3> Hi! </h3>
        My name is Kristy De La Cruz and I am a Software Engineer at Wells
        Fargo. I am currently located in Charlotte, North Carolina. 


        I love going on walks, watching tiktok and playing the
      </Container>
    </div>
  );
};
export default AboutMe;
