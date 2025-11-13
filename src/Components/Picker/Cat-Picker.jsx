import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";import DropdownButton from "react-bootstrap/DropdownButton";


export default function CategoryPicker({ handlers }) {
    const [handleLunch, handleDinner, handleSweets] = handlers;
    // const [handleLunch, handleDinner, handleBreakfast, handleDessert] = handlers;
  return (
    <>
      <Container>
        <Row>
          <ButtonGroup>
            <Button onClick={handleLunch}>Lunch</Button>
            <Button onClick={handleDinner}>Dinner</Button>
            <Button onClick={handleSweets}>Sweets</Button>
          </ButtonGroup>
        </Row>
      </Container>
    </>
  );
}
