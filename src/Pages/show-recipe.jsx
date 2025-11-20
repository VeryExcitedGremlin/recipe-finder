import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import content from "../Backend/Recipes";

export default function Recipe({ category }) {
  const { recipeId } = useParams();
  const { name, ingredients, instructions, notes } =
    content[category][recipeId];

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
      <Container className="outer-section">
        <Row className="inner-section" style={{ borderRadius: "2em 2em 0 0" }}>
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
                <h2 className="col col-sm-10 pt-4 pb-1 text-start">
                  Notes
                </h2>
              </Row>
              
              <Row className="justify-content-center">
                <ul className="col col-sm-10">{notesList}</ul>
              </Row>
            </Col>
          )}
        </Row>

        <Row
          className="justify-content-center inner-section"
          style={{ borderRadius: "0 0 2em 2em" }}
        >
          <Row>
            <h2 className="pb-4">Instructions</h2>
          </Row>
          <ol className="col-sm-10 ps-4">{instructionsList}</ol>
        </Row>
      </Container>
    </div>
  );
}
