import { Card, CardTitle, CardText, CardBody, Col, Row } from "reactstrap";

const ProjectDetail = ({ project }) => {
  const { name, longDescription } = project;

  return (
    <Card>
      <Col className="col-xs-12 col-sm-6 col-md-8">
        <CardTitle>{name}</CardTitle>
        <CardBody>
          <CardText>{longDescription}</CardText>
        </CardBody>
      </Col>
      <Col className="project-img-container">
        <img
          src={require("../../app/shared/images/project-example.png")}
          alt="project image"
          className="project-img"
        />
      </Col>
    </Card>
    // </Col>
  );
};

export default ProjectDetail;
