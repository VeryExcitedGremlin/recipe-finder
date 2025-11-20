import CategoryPicker from "../Components/Picker/Cat-Picker";

import ShowCategoryCards from "../Components/Show-Category-Cards/Show-Category-Cards";

export default function HomePage({ handlers, category }) {
  return (
    <div className="outer-section">
      <CategoryPicker handlers={handlers} category={category} />

      <ShowCategoryCards category={category} favoritesPage={false} />
    </div>
  );
}
