import React from "react";
import { Link } from "react-router-dom";
import kristyname from "../../photos/kristyname.png";
import { Container } from "@mui/material";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import "../Connect/Connect.css";

const Connect = () => {
  return (
    <div className="connect" id="connect">
      <Container maxWidth={false}>
        <h3> Lets stay in touch </h3>
        <div className="socialmedia">
          <a href="https://instagram.com/yoitskristyy"> 
          <FaSquareInstagram />
          </a>
          <a href="https://www.linkedin.com/in/kristydelacruz/">
          <FaLinkedin />
          </a>
          <a href="https://github.com/itsskristyy">
          <FaSquareGithub />
          </a>
        </div>
      </Container>
    </div>
  );
};
export default Connect;
