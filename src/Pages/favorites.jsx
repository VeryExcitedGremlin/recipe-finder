import CategoryPicker from "../Components/Picker/Cat-Picker";

import ShowCategoryCards from "../Components/Show-Category-Cards/Show-Category-Cards";

export default function Favorites({ handlers, category }) {
//   const [ categoryHandlers, favoriteHandlers ] = handlers;
  return (
    <div className="outer-section">
      <CategoryPicker
        handlers={handlers}
        //   handlers={categoryHandlers}
        category={category}
      />
      <ShowCategoryCards
        // handlers={favoriteHandlers}
        category={category}
        favoritesPage={true}
      />
    </div>
  );
}
