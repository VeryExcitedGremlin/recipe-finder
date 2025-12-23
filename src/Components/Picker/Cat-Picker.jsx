import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function CategoryPicker({ handlers, category, handleFilter }) {
  const [handleLunch, handleDinner, handleSweets] = handlers;

  return (
    <>
      <Row className="p-0 pt-4 pb-3">
        <ButtonGroup className="px-2 px-sm-4 px-md-5 py-md-3">
          <Button
            className={category == "lunch" ? "btn active" : "btn"}
            id="lunch-btn"
            onClick={() => {
              handleFilter("");
              handleLunch();
            }}
          >
            Lunch
          </Button>
          <Button
            className={category == "dinner" ? "btn active" : "btn"}
            id="dinner-btn"
            onClick={() => {
              handleFilter("");
              handleDinner();
            }}
          >
            Dinner
          </Button>
          <Button
            className={category == "sweets" ? "btn active" : "btn"}
            id="sweets-btn"
            onClick={() => {
              handleFilter("");
              handleSweets();
            }}
          >
            Sweets
          </Button>
        </ButtonGroup>
      </Row>
    </>
  );
}
