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
    <li className="ps-3 text-start" key={i}>
      <p>{instruction}</p>
    </li>
  ));

  return (
    <div>
      <Container className="outer-section">
        <Row>
          <h1 className="py-5">{name}</h1>
        </Row>

        <Row className="inner-section">
          <Col xs="12" sm="6">
            <Row className="justify-content-center">
              <h2 className="col-auto pb-4">Ingredients</h2>
            </Row>
            <Row className="justify-content-center">
              <ul className="col-auto p-0">{ingredientsList}</ul>
            </Row>
          </Col>
          {notes[0] == "" || (
            <Col sm="6">
              <Row>
                <h2 className="py-4 pt-sm-1">Notes</h2>
              </Row>
              <ul className="p-0">{notesList}</ul>
            </Col>
          )}
        </Row>

        <Row className="justify-content-start">
          <Row>
            <h2 className="pt-5 pb-4">Instructions</h2>
          </Row>
          <ol className="px-5">{instructionsList}</ol>
        </Row>
      </Container>
    </div>
  );
}
