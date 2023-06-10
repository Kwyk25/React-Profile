import "../App.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function MainCon() {
    return (
        <Container>
            <Col xs={6} md={4}>
                <Image src="../img/pfp.jpg" alt="profile image" rounded />
            </Col>
        </Container>
    );
}

export default MainCon;
