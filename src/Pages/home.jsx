import { useState } from "react";
import { Container } from "react-bootstrap";

import CategoryPicker from "../Components/Picker/Cat-Picker";
import ShowCategoryCards from "../Components/Show-Category-Cards/Show-Category-Cards";

export default function HomePage({ handlers, category, favoritesPage }) {
  const [useFilter, setUseFilter] = useState("");

  function handleFilter(newFilter) {
    setUseFilter(newFilter);
  }

  return (
    <Container className="outer-section row px-0 justify-content-center">
      {/* <div>{favoritesPage && <h2 className="pt-4">Favorites</h2>}</div> */}
      <CategoryPicker handlers={handlers} category={category} handleFilter={handleFilter} />

      <ShowCategoryCards category={category} favoritesPage={favoritesPage} passFilter={[useFilter, handleFilter]} />
    </Container>
  );
}
