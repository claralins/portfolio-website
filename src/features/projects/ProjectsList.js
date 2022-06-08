import { Col, Row } from "reactstrap";
import { selectAllProjects } from "./projectsSlice";
import AnimatedDisplayCard from "../display/AnimatedDisplayCard";

const ProjectsList = () => {
  const projects = selectAllProjects();
  return (
    <Row className="projects-list">
      {projects.map((item) => {
        return (
          <Col md="6" key={item.id}>
            <AnimatedDisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProjectsList;
