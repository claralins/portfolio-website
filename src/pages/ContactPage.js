import { Container, Row } from "reactstrap";
import { animated, useSpring } from "react-spring";

const Contact = () => {
  const animatedStyle = useSpring({
    from: { y: 50, opacity: 0.4 },
    config: { duration: 600 },
    loop: { y: 0, opacity: 1 },
  });

  return (
    <animated.div style={animatedStyle}>
      <Container className="container contact-container">
        <Row>
          <h2 className="section-title">Reach out</h2>
        </Row>
        <Row className="row-content align-items-center">
          <p>
            I'd love to collaborate with other developers, join a team of an
            exciting company, or simply make new connections!
          </p>
          <a className="link-styled" href="mailto:claralinsgomes@gmail.com">
            Send me an E-mail ⟶
          </a>
          <br />
          <a
            href="http://www.linkedin.com/in/clara-lins-gomes/"
            className="link-styled"
          >
            Connect on LinkedIn ⟶
          </a>
        </Row>
        <Row>
          <img
            src={require("../app/shared/images/woman-mobile-dev.png")}
            className="contact-image"
          />
        </Row>
      </Container>
    </animated.div>
  );
};

export default Contact;
