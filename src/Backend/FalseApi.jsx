// import Categories from "../Backend/Recipes";
import Categories from '../Backend/Recipes-Lists';

export default function FalseAPI(category) {
  const delay = Math.floor(Math.random() * 1000);
  // const delay = 0;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const endpoint = Categories[category];
      const response = { status: 200, data: endpoint };
      resolve(response);
      reject(`${category} is not a valid endpoint`);
    }, delay);
  });
}
