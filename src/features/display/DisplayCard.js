import { Badge, Card, CardBody, CardText, CardTitle } from "reactstrap";

const DisplayCard = ({ item }) => {
  const { name, tech, description } = item;

  return (
    <Card>
      <Badge>{tech}</Badge>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
