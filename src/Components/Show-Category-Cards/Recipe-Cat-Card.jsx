import { Link } from "react-router-dom";

// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";

export default function RecipeListCard({ recipe, handlers, favorites }) {
  if (recipe) {
    const [handleAdd, handleRemove] = handlers;
    const { name, link, img, description } = recipe;
    const [cat, recipeId] = link;
    const favorited = favorites.includes(name);
    const recipeLink = `${cat}/${recipeId}`;
    
    return (
      <Col xs="12" sm="6" md='4' className="p-xxl-4">
        <Card className="m-3">
          <Card.Header>
            <Row className="justify-content-end">
              <Col xs="auto">
                {favorited ? (
                  <i
                    className="fa-solid fa-heart-circle-minus fa-lg"
                    onClick={() => handleRemove(name)}
                  ></i>
                ) : (
                  <i
                    className="fa-regular fa-heart fa-lg"
                    onClick={() => handleAdd(name)}
                  ></i>
                )}
              </Col>
            </Row>
          </Card.Header>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={recipeLink}>
              <Button>Make this!</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
