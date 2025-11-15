import { Link } from "react-router-dom";
// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";

export default function RecipeListCard({ recipe }) {
  if (recipe) {
    const { name, link, img, description } = recipe;
    return (
      <Col>
          <Card style={{ minWidth: "9rem" }} className="m-3">
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Link to={link}>
                <Button variant="primary">Make this!</Button>
              </Link>
            </Card.Body>
          </Card>
      </Col>
    );
  }
}
