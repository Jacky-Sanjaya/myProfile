import React from "react";
import "./Stack.css";
import Skill from "../../reuseable/skill/Skill";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Stack(prop) {
  return (
    <Container id="skills" className="stack-box" fluid>
      <h1 className="tech">TECH SKILLS</h1>
      <Row>
        <Col>
          <Skill card={"card2"} name="React JS" />
        </Col>

        <Col>
          <Skill card={"card3"} name="React Native" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Skill card={"card4"} name="Javascript" />
        </Col>
        <Col>
          <Skill card={"card5"} name="HTML" />
        </Col>
        <Col>
          <Skill card={"card6"} name="CSS" />
        </Col>
      </Row>
    </Container>
  );
}

export default Stack;
