import Categories from "../Backend/Recipes-Lists";

export default function FalseAPI(
  category,
  favoritesPage,
  favorites,
) {
  const delay = Math.floor(Math.random() * 1000);
  localStorage.setItem("favoritesList", JSON.stringify(favorites));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let endpoint = Categories[category];
      if (favoritesPage) {
        if (favorites[0]) {
          endpoint = endpoint.filter((obj) => favorites.includes(obj.name));
        } else {
          endpoint = [];
        }
      }

      const response = { status: 200, data: endpoint };
      resolve(response);
      reject(`${category} is not a valid endpoint`);
    }, delay);
  });
}
