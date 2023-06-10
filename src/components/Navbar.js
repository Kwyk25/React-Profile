import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Github, Linkedin } from "react-bootstrap-icons";

function Topbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">React-portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="https://github.com/Kwyk25/React-Profile/commits/main"
                            target="_blank"
                        >
                            Commits
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            className="px-3"
                            href="https://www.linkedin.com/in/kyle-v-w/"
                            target="_blank"
                        >
                            <Linkedin />
                        </Nav.Link>
                        <Nav.Link
                            href="https://github.com/Kwyk25"
                            target="_blank"
                        >
                            <Github />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Topbar;
