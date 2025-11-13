import { useState, useEffect } from "react";

// componenets
import FalseAPI from "../../Backend/FalseApi";
import RecipeListCard from "./Recipe-List-Card";
import CatPickerSecondary from "../Picker/Cat-Picker-Secondary";

//helpers
import capitalizeFirstLetter from "../../Helpers/Capitalize-first";

// react bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

export default function ShowCategoryCards({ category }) {
  const [data, setData] = useState();
  const [useFilter, setUseFilter] = useState("");

  function handleFilter(newFilter) {
    setUseFilter(newFilter);
  }

  useEffect(() => {
    FalseAPI(category).then((response) => {
      setData(response.data);
    });
  }, [category]);

  if (data) {
    let newData;
    if (useFilter) {
      newData = data.filter(
        (recipe) =>
        {
          if (!recipe.filter) {
            handleFilter("");
            return
          } else {
            return recipe.filter.includes(useFilter);
          }
        }
      );
    } else {
      newData = data;
    }
    const cards = newData.map((recipe, i) => (
      <RecipeListCard key={i} recipe={recipe} />
    ));

    function checkFilters() {
      data.forEach((recipe) => {
        if (recipe.filter) {
          filters = [...new Set([...filters, ...recipe.filter])];
        }
      });
    }
    let filters = [];
    checkFilters();

    return (
      <Container>
        {!filters.length || (
          <CatPickerSecondary filters={filters} handleFilter={handleFilter} />
        )}
        <Row>
          <h2>{capitalizeFirstLetter(category)}</h2>
        </Row>
        <Row className="justify-content-center">{cards ? cards : ""}</Row>
      </Container>
    );
  }
}
