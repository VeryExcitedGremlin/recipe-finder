import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Container className="bookend">
      <Row className="align-items-center justify-content-around">
        <Col xs="auto">
          <h1>Recipe Finder</h1>
        </Col>
        <Col xs="auto">
          <nav>
            <Row>
              <Col>
                <li><Link to='/recipe-finder'>Home</Link></li>
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
