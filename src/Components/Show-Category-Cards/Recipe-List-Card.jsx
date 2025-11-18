import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
// Bootstrap
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";

export default function RecipeListCard({ recipe, rerender }) {
  // const [triggerRender, setTriggerRender] = rerender;
  // console.log(location.pathname);
  if (recipe) {
    // const location = useLocation();
    // const [handleAdd, handleRemove] = handlers;
    // console.log(handleAdd);
    // console.log(handleRemove);
    const { name, link, img, description } = recipe;
    let faves = JSON.parse(localStorage.getItem("favoritesList"));
    let favesStart;
    if (faves) {
      console.log(name);
      console.log(faves.includes(name));
      favesStart = faves.includes(name);
    } else {
      favesStart = false;
    }
    console.log('favesStart');
    console.log(favesStart);
    const [favorited, setFavorited] = useState(favesStart);
    console.log("favorited");
    console.log(favorited);
    // if ( faves.includes(name) ) { setFavorited(true) }

    function handleAdd(name) {
      // console.log("add");
      // let faves = JSON.parse(localStorage.getItem("favoritesList"));
      if (faves) {
        faves = [...faves, name];
      } else {
        faves = [name];
      }
      localStorage.setItem("favoritesList", JSON.stringify(faves));
      setFavorited(true);
      console.log(location.pathname);
      // if (location === "/recipe-finder/favorites") {
        // setTriggerRender(!triggerRender);
      // }
      // console.log("added");
    }
    function handleRemove(name) {
      // console.log("remove");
      // const faves = JSON.parse(localStorage.getItem("favoritesList"));
      const index = faves.indexOf(name);
      if (index > -1) {
        faves.splice(index, 1);
      }
      if (faves.length) {
        localStorage.setItem("favoritesList", JSON.stringify(faves));
      } else {
        localStorage.removeItem("favoritesList");
      }
      setFavorited(false);
      console.log(location.pathname);
      // if (location === "/recipe-finder/favorites") {
        // setTriggerRender(!triggerRender);
      // }
      // console.log("removed");
    }

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
