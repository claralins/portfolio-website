import { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <Navbar sticky="top" expand="md" className="navbar" variant="bg-light">
        {/* <img></img> */}
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
                  'nav-link' + (!isActive ? ' unselected' : '')
                }
                to="/"
              >
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem className="nav-item" href="/">
              <NavLink
                className={(isActive) =>
                  'nav-link' + (!isActive ? ' unselected' : '')
                }
                to="/"
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink
                className={(isActive) =>
                  'nav-link' + (!isActive ? ' unselected' : '')
                }
                to="/"
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
