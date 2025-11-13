import { useReducer } from "react";
import Header from "./Components/Header/Header";
import PersonalFooter from "./Components/Footer/personal-footer";
import CategoryPicker from "./Components/Picker/Cat-Picker";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ShowCategoryCards from "./Components/Show-Category-Cards/Show-Category-Cards";

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
      {/* <Routes>
        <Route path='/' element={} />
      </Routes> */}
      <CategoryPicker handlers={handlers} />
      <ShowCategoryCards category={state.category} />
      {/* </ShowCategoryCards> */}
      <PersonalFooter />
    </>
  );
}

export default App;
