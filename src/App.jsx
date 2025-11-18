import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import PersonalFooter from "./Components/Footer/personal-footer";

import HomePage from "./Pages/home";
import Favorites from "./Pages/favorites";
import Recipe from "./Pages/show-recipe";
import NotFound from "./Pages/404";

function App() {
  const initialState = {
    category: "lunch",
  };

  function catReducer(state, action) {
    switch (action.type) {
      case "LUNCH":
        return {
          category: "lunch",
        };
      case "DINNER":
        return {
          category: "dinner",
        };
      case "SWEETS":
        return {
          category: "sweets",
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(catReducer, initialState);

  function handleLunch() {
    dispatch({ type: "LUNCH" });
  }
  function handleDinner() {
    dispatch({ type: "DINNER" });
  }
  function handleSweets() {
    dispatch({ type: "SWEETS" });
  }

  const handlers = [handleLunch, handleDinner, handleSweets];
  // const categoryHandlers = [handleLunch, handleDinner, handleSweets];

  // function handleAdd(name) {
  //   const faves = JSON.parse(localStorage.getItem("favoritesList"));
  //   const newFaves = [...faves, name];
  //   localStorage.setItem("favoritesList", JSON.stringify(newFaves));
  //   console.log("add");
  // }
  // function handleRemove(name) {
  //   const faves = JSON.parse(localStorage.getItem("favoritesList"));
  //   const index = faves.indexOf(name);
  //   if (index > -1) {
  //     faves.splice(index, 1);
  //   }
  //   localStorage.setItem("favoritesList", JSON.stringify(faves));
  //   console.log("remove");
  // }

  // const favoriteHandlers = [handleAdd, handleRemove];

  // const handlers = [categoryHandlers, favoriteHandlers];

  return (
    <>
      <Header handleLunch={handleLunch} />
      <Routes>
        <Route
          path="/recipe-finder"
          element={<HomePage category={state.category} handlers={handlers} />}
        />
        <Route
          path="/recipe-finder/favorites"
          element={<Favorites category={state.category} handlers={handlers} />}
        />
        <Route
          path="/recipe-finder/recipe/:recipeId"
          element={<Recipe category={state.category} />}
        />
        <Route
          path="/recipe-finder/*"
          element={<NotFound />}
        />
      </Routes>
      <PersonalFooter />
    </>
  );
}

export default App;
