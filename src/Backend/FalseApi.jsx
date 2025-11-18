// import Categories from "../Backend/Recipes";
import Categories from '../Backend/Recipes-Lists';

export default function FalseAPI(category, favorites) {
  const delay = Math.floor(Math.random() * 1000);
  // const delay = 0;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let endpoint
      if(favorites) {
        const favoritesList = JSON.parse(localStorage.getItem("favoritesList"));
        if (favoritesList) {
          // console.log(favoritesList);
          endpoint = Categories[category].filter((obj) =>
              favoritesList.includes(obj.name)
            // console.log(obj.name)
          );
          // console.log(endpoint);
        } else {
          endpoint = [];
        }
      }
      else{
      endpoint = Categories[category];
      }
      const response = { status: 200, data: endpoint };
      resolve(response);
      reject(`${category} is not a valid endpoint`);
    }, delay);
  });
}
