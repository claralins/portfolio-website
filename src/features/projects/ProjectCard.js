import { Card, CardBody, CardText, CardTitle, Badge, Row } from "reactstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { id, name, tech, description } = project;
  return (
    <Card>
      <Row>
        <Link to={`${id}`}>
          <CardTitle>{name}</CardTitle>
        </Link>
        <Badge>{tech}</Badge>
      </Row>
      <CardBody>{description}</CardBody>
    </Card>
  );
};

export default ProjectCard;
