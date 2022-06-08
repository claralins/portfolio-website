import { Col, Row } from "reactstrap";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { selectFeaturedProject } from "../projects/projectsSlice";

const DisplayList = () => {
  const item = selectFeaturedProject();

  return (
    <Row>
      <Col className="m-1">
        <AnimatedDisplayCard item={item} />
      </Col>
    </Row>
  );
};

export default DisplayList;
