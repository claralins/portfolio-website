import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
  return (
    <div className="breadcrumb-section">
      <Breadcrumb className="breadcrumbs">
        <BreadcrumbItem>
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
        </BreadcrumbItem>
        {detail && (
          <BreadcrumbItem>
            <Link to="/projects" className="breadcrumb-link">
              Projects
            </Link>
          </BreadcrumbItem>
        )}
        <BreadcrumbItem active>{current}</BreadcrumbItem>
      </Breadcrumb>
      <h2>{current}</h2>
    </div>
  );
};

export default SubHeader;
