import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Spinner } from "react-bootstrap";

import FalseRecipeAPI from "../Backend/FalseRecipeAPI";

export default function Recipe({ category }) {
  const [recipe, setRecipe] = useState(
  //   {
  //   name: "name",
  //   ingredients: {},
  //   instructions: [],
  //   notes: [],
  // }
);
  const { recipeId } = useParams();
  // const recipe = content[category][recipeId];

  useEffect(() => {
    const spinner = document.getElementById("spinner");
    const showRecipe = document.getElementById("show-recipe");
    if (spinner && showRecipe) {
      spinner.style.display = "block";
      showRecipe.style.display = "none";
    }
    FalseRecipeAPI(category, recipeId).then((response) => {
      setRecipe(response.data);
      if (spinner && showRecipe) {
        spinner.style.display = "none";
        showRecipe.style.display = "block";
      }
    });
  }, [recipeId]);

  // let name, ingredients, instructions, notes;
  if (recipe) {
    // console.log(recipe)
    let { name, ingredients, instructions, notes } = recipe;

    const ingredientKeys = Object.keys(ingredients);
    const ingredientsList = ingredientKeys.map((ingredient, i) => (
      <li className="row text-start" key={i}>
        <p className="col-auto">
          <strong>{ingredients[ingredient]}</strong> {ingredient}
        </p>
      </li>
    ));

    const notesList = notes.map((note, i) => (
      <li className="row text-start" key={i}>
        <p>{note}</p>
      </li>
    ));

    const instructionsList = instructions.map((instruction, i) => (
      <li className="ps-2 text-start" key={i}>
        <p>{instruction}</p>
      </li>
    ));

    return (
      <div>
        <Container
          id="spinner"
          style={{ display: "none" }}
          className="outer-section justify-content-center p-3 row"
        >
          <Spinner animation="border" style={{ color: "#e079c0" }} />
        </Container>

        <Container id="show-recipe" className="outer-section">
          <Row
            className="inner-section"
            style={{
              borderRadius: "1.5em 1.5em 0 0",
              borderTop: "0",
              borderBottom: " 0.5em solid bisque",
            }}
          >
            <h1 className="py-2">{name}</h1>
          </Row>

          <Row className="justify-content-center p-3">
            <Col xs="auto" sm="6">
              <Row className="justify-content-center">
                <h2
                  className={
                    notes[0] == ""
                      ? "col-6 py-4 text-start"
                      : "col-12 col-sm-11 col-md-9 col-lg-7 col-xl-5 ps-4 ps-sm-0 pt-4 pb-2 text-start"
                  }
                >
                  Ingredients
                </h2>
              </Row>
              <Row className="justify-content-center">
                <ul
                  className={
                    notes[0] == ""
                      ? "col-auto"
                      : "col-auto col-sm-11 col-md-9 col-lg-7 col-xl-5 ps-4 ps-sm-0"
                  }
                >
                  {ingredientsList}
                </ul>
              </Row>
            </Col>
            {notes[0] == "" || (
              <Col sm="6">
                <Row className="justify-content-center">
                  <h2 className="col col-sm-10 pt-4 pb-1 text-start">Notes</h2>
                </Row>

                <Row className="justify-content-center">
                  <ul className="col col-sm-10">{notesList}</ul>
                </Row>
              </Col>
            )}
          </Row>

          <Row className="justify-content-center inner-section">
            <Row>
              <h2 className="pb-4">Instructions</h2>
            </Row>
            <ol className="col-sm-10 ps-4">{instructionsList}</ol>
          </Row>
        </Container>
      </div>
    );
  } else {
    return (
      <Container
        id="spinner"
        // style={{ display: "none" }}
        className="outer-section justify-content-center p-3 row"
      >
        <Spinner animation="border" style={{ color: "#e079c0" }} />
      </Container>
    );
  }
}
