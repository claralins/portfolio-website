import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

const Home = () => {
  const animatedStyle = useSpring({
    from: { y: 50, opacity: 0.4 },
    config: { duration: 600 },
    loop: { y: 0, opacity: 1 },
  });

  return (
    <animated.div style={animatedStyle}>
      <Container className="container home-container">
        <Row className="home-row">
          <Col className="col-12">
            <img
              src={require("../app/shared/images/woman-computer.png")}
              className="home-image"
              alt="woman working"
            />
          </Col>
          <Col className="home-links ">
            <Link to="/projects" className="link-styled">
              See all projects ⟶
            </Link>
            <Link to="/" className="link-styled">
              See my code on Github ⟶
            </Link>
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
};

export default Home;
