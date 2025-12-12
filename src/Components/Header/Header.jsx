// react bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// react router
import { Link } from "react-router-dom";

export default function Header({ handleLunch }) {
  return (
    <Container id="header" className="bookend">
      <Row className="align-items-center justify-content-around">
        <Col xs="auto">
          <h1>
            <i className="fa-solid fa-blender pe-3"></i>Recipe Finder
          </h1>
        </Col>
        <Col xs="auto">
          <nav>
            <Row>
              <Col>
                <li>
                  <Link onClick={handleLunch} to="/recipe-finder">
                    Home
                  </Link>
                </li>
              </Col>
              <Col>
                <li>
                  <Link onClick={handleLunch} to="/recipe-finder/favorites">
                    Favorites
                  </Link>
                </li>
              </Col>
            </Row>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}

// /recipe-finder/favorites
