import { Row } from "reactstrap";
import { selectAllTech } from "../features/technologies/TechnologiesSlice";
import DisplayTechList from "../features/display/DisplayTechList";

const Technologies = () => {
  const tech = selectAllTech();
  return (
    <Row key={tech.id}>
      {tech.map((item) => {
        return <DisplayTechList item={item} />;
      })}
    </Row>
  );
};

export default Technologies;
