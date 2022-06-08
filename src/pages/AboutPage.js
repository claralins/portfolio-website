import React from "react";
import { Container, Row, Col } from "reactstrap";
import Technologies from "../components/Technologies";
import { animated, useSpring } from "react-spring";

const About = () => {
  const animatedStyle = useSpring({
    from: { y: 50, opacity: 0.4 },
    config: { duration: 600 },
    loop: { y: 0, opacity: 1 },
  });

  return (
    <animated.div style={animatedStyle}>
      <Container className="about-container container">
        <Row className="about-row">
          {/* <h2 className="section-title">The developer</h2> */}
          <h3>
            I'm a Frontend Developer based in Virginia, soon in California.
          </h3>
          <a href="/" className="link-styled" download>
            Download resume ⟶
          </a>

          <a
            href="http://www.linkedin.com/in/clara-lins-gomes/"
            className="link-styled"
          >
            View LinkedIn ⟶
          </a>
        </Row>
        <Row className="about-row">
          <Col>
            <h2 className="section-title">Technologies</h2>
            <Technologies />
          </Col>
        </Row>
        <Row className="about-row">
          <Col className="about-education">
            <h2 className="section-title">Education & training</h2>

            <p>
              Full-Stack Web + Mobile Developement Bootcamp | Nucamp{" "}
              <span style={{ color: "#efbdb8" }}>2022</span>
            </p>
            <p>
              AWS Cloud Practitioner | Amazon{" "}
              <span style={{ color: "#efbdb8" }}>2022</span>
            </p>

            <p>
              Code In Place | Stanford University{" "}
              <span style={{ color: "#efbdb8" }}>2021</span>
            </p>
            <p>
              Bachelor's Degree, International Relations | Federal University of
              the ABC Area <span style={{ color: "#efbdb8" }}>2018</span>
            </p>
          </Col>
        </Row>

        <Row className="about-row">
          <Col className="about-background">
            <h2 className="section-title">Background</h2>
            <p>
              Born and raised in Brazil, I started university just short of 18
              and earned a Bachelors degree in International Relations. After
              traveling the world and exploring other possibilities, I decided
              to learn how to code. Stanford's Code In Place, an introductory
              Python course, was my first contact with programming. A bootcamp
              followed, and ever since I've been immersed in learning and
              creating web and mobile apps, like the ones you see{" "}
              <a className="inline-link" href="/projects">
                here
              </a>
              .
            </p>
            <p>
              Past experiences include work in the financial field in São Paulo,
              managing the team's schedule through Scrum, conducting research
              and creating relevant content for Investor Families. Additionally,
              I had other roles that required excellent communication skills,
              such as teaching English in Brazil and in Turkey, and working in a
              travel agency, where I was mediating contact between the 100+
              branch offices in Brazil and program providers in the US.
            </p>
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
};

export default About;
