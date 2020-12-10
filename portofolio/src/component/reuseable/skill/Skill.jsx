import React from "react";
import "./Skill.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10 - 0}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6.5 - 0}px,${y / 3.5}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 0}px,${y / 6 - -10}px,0)`;

function Skill(prop) {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <Container className="skill-container">
      <Col>
        <div
          class="container"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <animated.div
            class="card1"
            style={{ transform: props.xy.interpolate(trans1) }}
          />
          <animated.div
            class={prop.card}
            style={{
              transform: props.xy.interpolate(trans2),
            }}
          />
          <animated.div
            style={{
              transform: props.xy.interpolate(trans3),
            }}
          >
            <h1 className="skill-tittle">{prop.name}</h1>
          </animated.div>
        </div>
      </Col>
    </Container>
  );
}

export default Skill;
