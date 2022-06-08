import { useState } from "react";
import {
  Col,
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  Row,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <Row className="row pt-5">
        <Col>
          <Link to="/" className="main-link">
            <h1 className="text-center header-title">Clara Lins</h1>
          </Link>
          <h2 className="text-center header-description">Frontend Developer</h2>
        </Col>
      </Row>
      <Navbar sticky="top" expand="md" className="navbar" variant="bg-light">
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav navbar className="list-unstyled">
            <NavItem className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="nav-item" href="/">
              <NavLink
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                to="/projects"
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem className="nav-item" href="/">
              <NavLink
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
                to="/about"
              >
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
