import React from "react"
// import { Link } from "react-router-dom"
import kristyname from '../../photos/kristyname.png'
import { Container } from "@mui/material"
import '../Home/Home.css'
const Home = () => {
    return (
        <div className="home" id='main'> 
        <Container className="navigation" maxWidth={false}>
            <img src={kristyname} className="logo" alt="logo" />
            {/* <ul>
              <Link to="/aboutme" className="link">About Me</Link>
              <Link to="/projects" className="link">Projects</Link>
            </ul> */}

          </Container>
        </div>
    )
}
export default Home