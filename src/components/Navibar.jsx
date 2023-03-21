import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navibar() {
  return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to={"/"}>
            <img
              alt=""
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
              Software Engineers
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/Tables"}>
                  Table
                </Nav.Link>
                <Nav.Link as={Link} to={"/About"}>
                  About Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
}

export default Navibar;
