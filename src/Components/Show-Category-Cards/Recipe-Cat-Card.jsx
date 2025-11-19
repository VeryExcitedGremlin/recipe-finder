import { Link } from "react-router-dom";

// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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
    // console.log(favorited);
    // console.log(favorites);

    // const favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
    return (
      <Col>
        <Card className="m-3">
          <Card.Img variant="top" src={img} />
          <Card.ImgOverlay>
            <div className="row jusify-content-end">
              <span className="col-auto">
                {favorited ? (
                  <button onClick={() => handleRemove(name)}>
                    <i className="fa-solid fa-heart-circle-minus fa-lg"></i>
                  </button>
                ) : (
                  <button onClick={() => handleAdd(name)}>
                    <i className="fa-solid fa-heart-circle-plus fa-lg"></i>
                  </button>
                )}
              </span>
            </div>
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={`recipe/${link}`}>
              <Button>Make this!</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
