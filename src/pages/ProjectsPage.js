import { Container } from "reactstrap";
import ProjectsList from "../features/projects/ProjectsList";
import { animated, useSpring } from "react-spring";

const ProjectsPage = () => {
  const animatedStyle = useSpring({
    from: { y: 50, opacity: 0.4 },
    config: { duration: 600 },
    loop: { y: 0, opacity: 1 },
  });

  return (
    <animated.div style={animatedStyle}>
      <Container>
        <ProjectsList />
      </Container>
    </animated.div>
  );
};

export default ProjectsPage;
