import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const AnimatedDisplayCard = ({ item }) => {
  const { name, tech, description, id } = item;

  return (
    <Link to={`/projects/${id}`}>
      <Card className="display-card">
        <Col className="badge-container col-xs-4 col-md-6">
          {/* <CardImg></CardImg> */}
          <CardTitle className="card-title">{name}</CardTitle>
          <ul className="list-unstyled">
            {tech.map((tech) => (
              <li>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </Col>

        <Col className="col-xs-9 col-md-8 ">
          <CardBody>
            <CardText>{description}</CardText>
          </CardBody>
        </Col>
      </Card>
    </Link>
  );
};

export default AnimatedDisplayCard;
