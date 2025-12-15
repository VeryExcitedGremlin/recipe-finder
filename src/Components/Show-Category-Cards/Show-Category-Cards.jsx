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
    if (spinner && showCards) {
      spinner.style.display = "block";
      showCards.style.display = "none";
    }
    FalseAPI(category, favoritesPage, favorites).then((response) => {
      setData(response.data);
      if (spinner && showCards) {
        spinner.style.display = "none";
        showCards.style.display = "block";
      }
    });
  }, [category, favorites, favoritesPage]);

  if (data) {
    function filterData(data) {
      if (useFilter) {
        return data.filter((recipe) => {
          return recipe.filter.includes(useFilter);
        });
      } else {
        return data;
      }
    }
    const newData = filterData(data);

    const cards = newData.map((recipe, i) => (
      <RecipeListCard
        key={i}
        recipe={recipe}
        handlers={handlers}
        favorites={favorites}
      />
    ));

    // console.log(!cards[0])

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
        <Row
          className={
            filters[0] ? "justify-content-end" : "justify-content-center"
          }
        >
          <h2 className="col-6 mb-4">
            {capitalizeFirstLetter(useFilter || category)}
          </h2>
          {!filters[0] || (
            <CatPickerSecondary filters={filters} handleFilter={handleFilter} />
          )}
        </Row>
        <Row
          id="card-container"
          className="justify-content-center align-items-center inner-section"
          style={{ borderRadius: "0 0 2em 2em" }}
        >
          <Spinner
            id="spinner"
            animation="border"
            style={{ display: "none", color: "#e079c0" }}
          />
          {cards[0] ? cards : <CardPalceholder />}
        </Row>
      </Container>
    );
  }
}
