import { useState, useEffect } from "react";

// componenets
import FalseAPI from "../../Backend/FalseApi";
import RecipeListCard from "./Recipe-Cat-Card";
import CatPickerSecondary from "../Picker/Cat-Picker-Secondary";
import CardPalceholder from "./Placeholder";

//helpers
import capitalizeFirstLetter from "../../Helpers/Capitalize-first";

// react bootstrap
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Spinner from "react-bootstrap/Spinner";

export default function ShowCategoryCards({
  category,
  favoritesPage,
  passFilter,
}) {
  const [data, setData] = useState();
  const [useFilter, handleFilter] = passFilter;

  let faves = JSON.parse(localStorage.getItem("favoritesList"));
  const [favorites, setFavorites] = useState(faves || []);

  function handleAdd(name) {
    setFavorites((prev) => [...prev, name]);
  }
  function handleRemove(name) {
    const index = favorites.indexOf(name);
    if (index > -1) {
      const toRemove = favorites.splice(index, 1);
      const newFavorites = favorites.filter((item) => item !== toRemove);
      setFavorites(newFavorites);
    }
  }
  const handlers = [handleAdd, handleRemove];

  useEffect(() => {
    const spinner = document.getElementById("spinner");
    const showCards = document.getElementById("cards");
    if (spinner) {
      spinner.style.display = "block";
    }
    if (showCards) {
      showCards.style.display = "none";
    }
    FalseAPI(category, favoritesPage, favorites).then((response) => {
      setData(response.data);
      if (spinner) {
        spinner.style.display = "none";
      }
      if (showCards) {
        showCards.style.display = "flex";
      }
    });
  }, [category, favorites, favoritesPage]);

  function filterData(data) {
    if (useFilter) {
      return data.filter((recipe) => {
        return recipe.filter.includes(useFilter);
      });
    } else {
      return data;
    }
  }

  if (data) {
    const newData = filterData(data);

    const cards = newData.map((recipe, i) => (
      <RecipeListCard
        key={i}
        recipe={recipe}
        handlers={handlers}
        favorites={favorites}
      />
    ));

    function checkFilters() {
      let filters = [];
      data.forEach((recipe) => {
        if (recipe.filter) {
          filters = [...new Set([...filters, ...recipe.filter])];
        }
      });
      return filters;
    }
    const filters = checkFilters();

    return (
      <Container>
        <Row className={`${!filters[0] ? 'justify-content-center' : 'justify-content-end'} align-items-center mt-2 mb-4`}>
          {
            <h2 className="col-6 mb-0 p-0">
              {capitalizeFirstLetter(category)}{" "}
              {useFilter && `(${capitalizeFirstLetter(useFilter)})`}
            </h2>
          }
          {!filters[0] || (
            <CatPickerSecondary
              filters={filters}
              handleFilter={handleFilter}
              useFilter={useFilter}
            />
          )}
        </Row>
        <Row
          id="card-container"
          className="justify-content-center inner-section p-0 py-4"
        >
          <Spinner
            id="spinner"
            animation="border"
            style={{ display: "none", color: "#e079c0" }}
          />
          <Row
            id="cards"
            className="justify-content-center align-items-center p-0 col-lg-11"
          >
            {cards[0] ? cards : <CardPalceholder />}
          </Row>
        </Row>
      </Container>
    );
  } else {
    return (
      <Row className="inner-section justify-content-center">
        <Spinner
          animation="border"
          style={{ color: "#e079c0" }}
        />
      </Row>
    );
  }
}
// }
