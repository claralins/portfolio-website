import { Badge } from "reactstrap";

const DisplayTechList = ({ item }) => {
  const { tech } = item;
  return <Badge>{tech}</Badge>;
};

export default DisplayTechList;
