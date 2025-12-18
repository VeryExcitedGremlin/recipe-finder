// react bootstrap
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

//helpers
import capitalizeFirstLetter from "../../Helpers/Capitalize-first";

export default function CatPickerSecondary({
  filters,
  handleFilter,
  useFilter,
}) {
  const dropdown = filters.sort().map((filter, i) => (
    <Dropdown.Item onClick={() => handleFilter(filter)} key={i++}>
      {capitalizeFirstLetter(filter)}
    </Dropdown.Item>
  ));

  return (
    <>
      {/* <Col xs={useFilter ? "6" : "12"} sm={useFilter ? "3" : "12"}> */}
      <Col xs="6" sm="3">
        <DropdownButton id="dropdown" title="Filter">
          <Dropdown.Item onClick={() => handleFilter("")} key={0}>
            All
          </Dropdown.Item>
          {dropdown}
        </DropdownButton>
      </Col>
    </>
  );
}
