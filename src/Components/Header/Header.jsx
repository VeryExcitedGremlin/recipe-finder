import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
  return (
    <Container>
      <Row className="align-items-end justify-content-center">
        <Col xs="auto">
          <h1>Recipe Finder</h1>
        </Col>
        <Col xs="auto">
          <nav>
            <Row>
              <Col>
                <li>Home</li>
              </Col>
              <Col>
                <li>Favorites</li>
              </Col>
            </Row>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}
