// {
//   name: "",
//   ingredients: "",
//   instructions: "",
// },

const lunch = [
  {
    name: "",
    ingredients: "",
    instructions: "",
  },
];
const dinner = [
  {
    name: "",
    ingredients: "",
    instructions: "",
  },
];
const sweets = [
  {
    name: "Chocolate Chip Cookies",
    ingredients: {
      "salted butter": "8 tablespoons",
      "white sugar": "1/2 cup",
      "packed light brown sugar": "1/4 cup",
      vanilla: "1 teaspoon",
      egg: 1,
      "all purpose flour": "1 1/2 cups",
      "baking soda": "1/2 teaspoon",
      salt: "1/4 teaspoon",
      "chocolate chips": "3/4 cup",
    },
    instructions: [
      "Preheat oven to 350 degrees.",
      "Melt butter in microwave for 40-60 seconds.",
      "Beat butter with sugars until creamy.",
      "Add vanilla and egg, beat for 10-15 seconds.",
      "Add flour, baking soda, and salt. Mix until crumbles form.",
      "Fold in teh chocolate chips.",
      "Roll dough into 9-12 balls and place evenly spaced on baking sheet.",
      "Bake for 9-11 minutes until just golden brown on the bottom.",
      "Let cool on the pan until stiff (about 30 minutes).",
      "Enjoy!",
    ],
  },
  {
    name: "Pancakes",
    ingredients: {
      "All-purpose flour": "1 1/2 cups",
      "baking powder": "3 1/2 teaspoons",
      sugar: "1 tablespoon",
      salt: "1/4 teaspoon",
      milk: "1 1/4 cups",
      "butter (melted)": "3 tablespoons",
      egg: 1,
    },
    instructions: [
      "Sift flour, baking powder, sugar, and salt together in a large bowl.",
      "Make a well in the center, add milk, butter, and egg; mix until smooth.",
      "Lightly oil griddle or pan and heat over medium-high heat.",
      "Use about 1/4 cup of batter per pancake, cook 2-3 minutes until bubbles form and the edges are dry.",
      "Flip and cook until browned.",
      "Repeat with remaining batter, makes about 8.",
    ],
  },
];

export default {
  lunch: lunch,
  dinner: dinner,
  sweets: sweets,
};
