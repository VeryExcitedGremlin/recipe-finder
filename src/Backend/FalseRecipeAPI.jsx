import content from '../Backend/Recipes'

export default function FalseRecipeAPI(category, recipeId) {
  const delay = Math.floor(Math.random() * 1000);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const endpoint = content[category][recipeId];
        const response = { status: 200, data: endpoint };
        resolve(response);
        reject(`${recipeId} is not a valid endpoint`);
    }, delay);
  });
}