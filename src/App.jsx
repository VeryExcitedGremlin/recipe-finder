import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import PersonalFooter from "./Components/Footer/personal-footer";

import HomePage from "./Pages/home";
import Recipe from "./Pages/show-recipe";

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

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/recipe-finder"
          element={<HomePage category={state.category} handlers={handlers} />}
        />
        <Route
          path="/recipe-finder/recipe/:recipeId"
          element={<Recipe category={state.category} />}
        />
      </Routes>
      <PersonalFooter />
    </>
  );
}

export default App;
