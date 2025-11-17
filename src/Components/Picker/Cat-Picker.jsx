import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";import DropdownButton from "react-bootstrap/DropdownButton";


export default function CategoryPicker({ handlers, category }) {
    const [handleLunch, handleDinner, handleSweets] = handlers;
    // const [handleLunch, handleDinner, handleBreakfast, handleDessert] = handlers;
  return (
    <>
      {/* <Container> */}
        <Row className="p-3 pt-4">
          <ButtonGroup>
            <Button
              className={category == "lunch" ? "btn active" : "btn"}
              id="lunch-btn"
              onClick={handleLunch}
            >
              Lunch
            </Button>
            <Button
              className={category == "dinner" ? "btn active" : "btn"}
              id="dinner-btn"
              onClick={handleDinner}
            >
              Dinner
            </Button>
            <Button
              className={category == "sweets" ? "btn active" : "btn"}
              id="sweets-btn"
              onClick={handleSweets}
            >
              Sweets
            </Button>
          </ButtonGroup>
        </Row>
      {/* </Container> */}
    </>
  );
}
