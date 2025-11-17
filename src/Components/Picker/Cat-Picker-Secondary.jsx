// react bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

//helpers
import capitalizeFirstLetter from "../../Helpers/Capitalize-first";

export default function CatPickerSecondary({ filters, handleFilter }) {

  const dropdown = filters.sort().map((filter, i) => (
    <Dropdown.Item onClick={() => handleFilter(filter)} key={i++}>{capitalizeFirstLetter(filter)}</Dropdown.Item>
  ));

  return (
    <>
      <Row className="justify-content-end">
        <Col xs="auto">
          <DropdownButton id="dropdown" title="Filter">
            <Dropdown.Item onClick={() => handleFilter('')} key={0}>
              All
            </Dropdown.Item>
            {dropdown}
          </DropdownButton>
        </Col>
      </Row>
    </>
  );
}
