// import Categories from "../Backend/Recipes";
import Categories from '../Backend/Recipes-Lists';

export default function FalseAPI(category, favoritesPage, favorites) {
  const delay = Math.floor(Math.random() * 1000);
  localStorage.setItem("favoritesList", JSON.stringify(favorites));
  // const delay = 0;

  return new Promise((resolve, reject) => {
    console.log(favorites);
    setTimeout(() => {
      let endpoint;
      if (favoritesPage) {
        if (favorites[0]) {
          endpoint = Categories[category].filter(
            (obj) => favorites.includes(obj.name)
            // console.log(obj.name)
          );
          // console.log(endpoint);
        } else {
          endpoint = [];
        }
      } else {
        endpoint = Categories[category];
      }
      const response = { status: 200, data: endpoint };
      resolve(response);
      reject(`${category} is not a valid endpoint`);
    }, delay);
  });
}
