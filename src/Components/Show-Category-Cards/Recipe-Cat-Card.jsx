import { Link } from "react-router-dom";

// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";

export default function RecipeListCard({ recipe, handlers, favorites }) {
  if (recipe) {
    // const location = useLocation();
    // const [handleAdd, handleRemove] = handlers;
    // console.log(handleAdd);
    // console.log(handleRemove);
    const [handleAdd, handleRemove] = handlers;
    const { name, link, img, description } = recipe;
    const favorited = favorites.includes(name);
    const recipeLink = `recipe/${link}`
    // console.log(favorited);
    // console.log(favorites);

    // const favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
    return (
      <Col>
        <Card className="m-3">
          <Card.Header>
            <Row className="justify-content-end">
              <Col xs='auto'>
                {favorited ? (
                  // <button onClick={() => handleRemove(name)}>
                  //   <i className="fa-solid fa-heart-circle-minus fa-lg"></i>
                  // </button>
                  <i
                    onClick={() => handleRemove(name)}
                    className="fa-solid fa-heart-circle-minus fa-lg"
                  ></i>
                ) : (
                  // <button onClick={() => handleAdd(name)}>
                  //   <i class="fa-regular fa-heart fa-lg"></i>
                  // </button>
                  <i
                    onClick={() => handleAdd(name)}
                    className="fa-regular fa-heart fa-lg"
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
