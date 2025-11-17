import { useReducer } from "react";
import Header from "./Components/Header/Header";
import PersonalFooter from "./Components/Footer/personal-footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home";

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
    // document.getElementById('lunch-btn').classList.add('active')
    // document.getElementById("dinner-btn").classList.remove("active");
    // document.getElementById("sweets-btn").classList.remove("active");
  }
  function handleDinner() {
    dispatch({ type: "DINNER" });
    // document.getElementById("dinner-btn").classList.add("active");
    // document.getElementById("lunch-btn").classList.remove("active");
    // document.getElementById("sweets-btn").classList.remove("active");
  }
  function handleSweets() {
    dispatch({ type: "SWEETS" });
    // document.getElementById("sweets-btn").classList.add("active");
    // document.getElementById("dinner-btn").classList.remove("active");
    // document.getElementById("lunch-btn").classList.remove("active");
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
      </Routes>
      {/* </ShowCategoryCards> */}
      <PersonalFooter />
    </>
  );
}

export default App;
