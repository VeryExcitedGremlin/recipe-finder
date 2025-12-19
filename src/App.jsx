// React
import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

// Styling
import "./App.css";

// components
import Header from "./Components/Header/Header";
import PersonalFooter from "./Components/Footer/personal-footer";

// Pages
import HomePage from "./Pages/home";
import Recipe from "./Pages/show-recipe";
import NotFound from "./Pages/404";

// Helpers
import ScrollToTop from "./Helpers/Scroll-to-Top";

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
    <ScrollToTop />
      <Header handleLunch={handleLunch} />
      <Routes>
        <Route
          path="/recipe-finder"
          element={
            <HomePage
              category={state.category}
              handlers={handlers}
              favoritesPage={false}
            />
          }
        />
        <Route
          path="/recipe-finder/favorites"
          element={
            <HomePage
              category={state.category}
              handlers={handlers}
              favoritesPage={true}
            />
          }
        />
        <Route
          path="/recipe-finder/:cat/:recipeId"
          element={<Recipe />}
        />
        <Route path="/recipe-finder/*" element={<NotFound />} />
      </Routes>
      <PersonalFooter />
    </>
  );
}

export default App;
