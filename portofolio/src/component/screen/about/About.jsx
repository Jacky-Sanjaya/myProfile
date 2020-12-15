import React from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "../../reuseable/button/button";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Profile from "../../assets/images/Profile.jpg";

function About() {
  return (
    // <Parallax
    //   blur={{ min: -30, max: 30 }}
    //   bgImage={require("../../assets/img/parallex/background.webp")}
    //   bgImageAlt=""
    //   strength={-200}
    // >
    //   <Fade duration={500}>
    //     <div id="about">
    //       <Container className="aboutContainer" fluid>
    //         <Row xs={12}>
    //           <Col xs={5} className="about1">
    //             <h1 className="about">About Me</h1>
    //             <div className="inside">
    //               <h2 className="text-1">Hello.</h2>
    //               <h1 className="text-2">I'm Jacky</h1>
    //               {/* <h3 className="text-3">Simple humble guy</h3> */}
    //             </div>
    //           </Col>
    //           <Col xs={7} className="about2" fluid>
    //             <img src={Profile} className="image" />
    //             <p className="desc">
    //               I am an energetic , ambitious, and humble person. I just
    //               graduated from Vocational High School and now im on University
    //               and majoring Infomatics Engineering . I always wanted to be a
    //               great developer , and I will do anyting to chase that dream .
    //               Oh and also I am excellent in working as a group to achieve a
    //               certain objective
    //             </p>
    //             <Button
    //               name="VIEW RESUME"
    //               link="https://drive.google.com/file/d/1jTeV6FPr5sTjxzbLlwmxDkTP0UCpH9Au/view?usp=sharing"
    //             />
    //             <Button name="GITHUB" link="https://github.com/Jacky-Sanjaya" />
    //             <Button name="GITLAB" link="https://gitlab.com/kykho3" />
    //             <Button
    //               name="LINKEDIN"
    //               link="https://www.linkedin.com/in/jacky-sanjaya-92669a1b6/"
    //             />
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   </Fade>
    // </Parallax>
    <div className="grid-container">
      <div class="about">
        <h1>About Me</h1>
        <div className="inside">
          <h2 className="text-1">Hello.</h2>
          <h1 className="text-2">I'm Jacky</h1>
          {/* <h3 className="text-3">Simple humble guy</h3> */}
        </div>
      </div>
      {/* <div className="image">
        <img src={Profile} className="image-1" />
      </div> */}
      <div className="buton">
        <p className="desc">
          I am an energetic , ambitious, and humble person. I just graduated
          from Vocational High School and now im on University and majoring
          Infomatics Engineering . I always wanted to be a great developer , and
          I will do anyting to chase that dream . Oh and also I am excellent in
          working as a group to achieve a certain objective
        </p>
        <Button
          name="VIEW RESUME"
          link="https://drive.google.com/file/d/1jTeV6FPr5sTjxzbLlwmxDkTP0UCpH9Au/view?usp=sharing"
        />
        <Button name="GITHUB" link="https://github.com/Jacky-Sanjaya" />
        <Button name="GITLAB" link="https://gitlab.com/kykho3" />
        <Button
          name="LINKEDIN"
          link="https://www.linkedin.com/in/jacky-sanjaya-92669a1b6/"
        />
      </div>
    </div>
  );
}

export default About;
