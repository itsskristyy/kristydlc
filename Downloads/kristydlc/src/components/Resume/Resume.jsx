import { Container } from "@mui/material";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <Container>
        <div className="resume">
          <h1>Technical Experience:</h1>
          <h2>Wells Fargo - Software Engineer</h2>
          <h3> January 2023 - Current </h3>
          <ul>
            <li>
              Creating and working with REST API’s to make sure our application
              is connected smoothly.
            </li>
            <li>
              Working under Agile methodologies using a scrum team format.
            </li>
          </ul>
        </div>
        <div className="tech">
          <h1>Skills:</h1>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li> Rest API's</li>
            <li> GitHub</li>
            <li> Splunk</li>
            <li> Jira</li>
            <li> Confluence </li>
            <li> EPL </li>
            <li> Jenkins </li>
            <li> Jest Testing </li>
          </ul>
        </div>
        <div className="education">
          <h1>Education/Activities:</h1>
          <ul>
            <li>Brooklyn College</li>
            <li>Computer Science Club</li>
            <li> Girls Who Code </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
