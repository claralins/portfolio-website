import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Technologies from '../components/Technologies';

// import ProjectsList from '../features/projects/ProjectsList';
import { animated, useSpring } from 'react-spring';

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
          <Col className="col-6">
            {/* <img
              src={require('../app/shared/images/woman-computer.png')}
              className="home-image"
              alt="woman working"
            /> */}
          </Col>
          <Col className="col-4">
            <Link to="/" className="main-link">
              <h1 className="header-title">Clara Lins</h1>
            </Link>
            <h2 className="header-description">
              Product Designer based in Sillicon Valley. <br></br>Currently
              enrolled in DesignLab.
            </h2>
          </Col>

          <Col className="home-links col-4">
            <Link to="/projects" className="link-styled">
              portfolio ⟶
            </Link>
            <Link to="/" className="link-styled">
              view my code on Github ⟶
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>{/* <ProjectsList /> */}</Container>
      <Container className="about-container container">
        <Row className="about-row">
          {/* <Col className="about-tech">
            <h2 className="section-title">I'm confident with</h2>
            <Technologies />
          </Col> */}
        </Row>
        <Row className="about-row">
          <Col className="about-background col-4">
            <h2 className="section-title">Background</h2>
            <p>
              Currently enrolled in DesignLab’s UX/UI program to perfect my
              abilities. I have a background in International Relations, but
              would rather build cool digital products instead.{' '}
            </p>
            <p>
              Past experiences include work in the financial field in São Paulo,
              teaching English as a Second Language, and traveling the world.
            </p>
          </Col>
          <Col className="about-photo">
            <img
              src="../app/shared/imagess/IMG_0036.JPG"
              alt="the designer"
            ></img>
          </Col>
        </Row>

        <Row className="about-row">
          <Col className="about-education">
            <h2 className="section-title">Education & training</h2>

            <p>
              UX & UI Design | DesignLab{' '}
              <span style={{ fontWeight: 'bold' }}>2024</span>
            </p>
            <p>
              Full-Stack Web + Mobile Developement Bootcamp | Nucamp{' '}
              <span style={{ fontWeight: 'bold' }}>2022</span>
            </p>
            <p>
              Code In Place | Stanford University{' '}
              <span style={{ fontWeight: 'bold' }}>2021</span>
            </p>
            <p>
              Bachelor's Degree, International Relations | Federal University of
              the ABC Area <span style={{ fontWeight: 'bold' }}>2018</span>
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="contact-container" id="contact">
        <p>contact</p>
      </Container>
    </animated.div>
  );
};

export default Home;
