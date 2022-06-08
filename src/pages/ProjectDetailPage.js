import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectProjectById } from "../features/projects/projectsSlice";
import ProjectDetail from "../features/projects/ProjectDetail";
import SubHeader from "../components/SubHeader";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = selectProjectById(projectId);

  return (
    <Container>
      <SubHeader detail={true} />
      <Row>
        <ProjectDetail project={project} />
      </Row>
    </Container>
  );
};

export default ProjectDetailPage;
