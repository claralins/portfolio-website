// import { Badge } from 'reactstrap';

const DisplayTechList = ({ item }) => {
  const { tech } = item;
  return <p className="badge">{tech}</p>;
};

export default DisplayTechList;
