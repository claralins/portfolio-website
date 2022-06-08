import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="col-xs-4 col-md-6">
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="link-styled">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="link-styled">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-styled">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-styled">
                  About
                </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <p style={{ color: "#e3e3e3", fontSize: "15px" }}>
              2022 &copy; Clara Lins
            </p>
            <p style={{ color: "#e3e3e3", fontSize: "15px" }}>
              All illustrations from
              <a
                href="https://www.uistore.design/items/loomies-free-illustration/"
                className="inline-link"
              >
                {" "}
                GetIllustrations
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
