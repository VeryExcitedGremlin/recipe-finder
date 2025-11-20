import { useState } from "react";

import CategoryPicker from "../Components/Picker/Cat-Picker";
import ShowCategoryCards from "../Components/Show-Category-Cards/Show-Category-Cards";

export default function HomePage({ handlers, category, favoritesPage }) {
  const [useFilter, setUseFilter] = useState("");

  function handleFilter(newFilter) {
    setUseFilter(newFilter);
  }

  return (
    <div className="outer-section">
      <CategoryPicker handlers={handlers} category={category} handleFilter={handleFilter} />

      <ShowCategoryCards category={category} favoritesPage={favoritesPage} passFilter={[useFilter, handleFilter]} />
    </div>
  );
}
