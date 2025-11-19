// {
//   name: "",
//   ingredients: {"": ""},
//   instructions: [""],
//   notes: [""],
// },

const lunch = {
  "Chicken-Fried-Rice": {
    name: "Chicken Fried Rice",
    ingredients: {
      "chicken breast, diced": "3/4 - 1 lb",
      butter: "4-8 tbsp",
      "sesame oil": "2 tbsp",
      "onion, chopped small": 1,
      "peas and carrots, frozen mix": "1 1/3 cups",
      "green onions, chopped": "3",
      "garlic, minced": "2 cloves",
      eggs: "2",
      "rice, cooked": "3 cups",
      "soy-sauce": "3 tbsp",
      "salt and pepper": "To taste",
    },
    instructions: [
      "Heat butter over medium-high heat, add chicken once hot",
      "Season with salt and pepper and saute until cooked through, about 5-6 minutes",
      "Transfer chicken to a plate and set aside",
      "Add half of the sesame oil to the pan. Once hot add onion and caramelize",
      "Add remaining sesame oil, peas and carrots, saute 1 minute",
      "Add garlic and saute 1 minute longer",
      "Push veggies to the side, add eggs and scramble",
      "Return the chicken, add rice and soy sauce. Season to taste",
      "Heat and stir 1-2 minutes until combined",
      "Serve and enjoy!",
    ],
    notes: ["I usually skip the peas and carrots"],
  },
};
const dinner = {
  "Beef-Stroganoff": {
    name: "Beef Stroganoff",
    ingredients: {
      "steak, cut into strips": "1 lb",
      "red wine": "1/2 cup",
      "unsalted butter": "8 tbsp",
      "olive oil": "2 tbsp",
      onion: 1,
      "brown mushrooms": "1/2 lb",
      "garlic, minced": "2 cloves",
      "all-purpose flour": "1 tbsp",
      "beef broth": "1 cup",
      "yogurt": "1 cup",
      "worcestershire sauce": "1 tbsp",
      "dijon mustart": "1/2 tsp",
      "salt and pepper": "To taste",
      "egg noodles": "8-12 oz",
    },
    instructions: [
      "Add wine and butter to a deep pan, heat over medium-high heat. Add beef once hot",
      "Cook beef until just browned on both sides. Remove to a plate and set aside, retaining the juices",
      "Add olive oil. Once hot, add onion and cook about 5-10 minutes",
      "Add mushrooms and cook until most of the remaining liquid is gone. Onions should be caramelized and mushrooms lightly browned",
      "Add garlic, heat until fragrant",
      "Add flour, stir vigorously until combined and lumps are gone",
      "Pour in beef broth, scraping any bits from the bottom of the pan",
      "Add yogurt or creams (temper the sour cream by adding a few tablespoons of sauce to it first) and stir well. Let simmer until slightly thickened",
      "Add worcestershire sauce and mustard, season to taste. Stir until sauce is creamy",
      "Return the beef and any juices back to the pan, simmer until beef is heated through",
      "Serve over egg noodles",
    ],
    notes: [
      'You can substitute the yogurt for 1/4 cup sour cream + 3/4 cups heavy cream',
      'Serve over mashed potatos instead for a super creamy and delicious twist on a classic'
      ]
  },
};
const sweets = {
  "Chocolate-Chip-Cookies": {
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
      "Preheat oven to 350 degrees",
      "Melt butter in microwave for 40-60 seconds",
      "Beat butter with sugars until creamy",
      "Add vanilla and egg, beat for 10-15 seconds",
      "Add flour, baking soda, and salt. Mix until dough forms",
      "Fold in the chocolate chips",
      "Roll dough into 9-12 balls and place evenly spaced on baking sheet",
      "Bake for 9-11 minutes until just golden brown on the bottom",
      "Let cool on the pan until stiff (about 30 minutes)",
      "Enjoy!",
    ],
    notes: ["Use a hand or stand mixer for the best results"],
  },
  Pancakes: {
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
      "Sift flour, baking powder, sugar, and salt together in a large bowl",
      "Make a well in the center, add milk, butter, and egg; mix until smooth",
      "Lightly oil griddle or pan and heat over medium-high heat",
      "Use about 1/4 cup of batter per pancake, cook 2-3 minutes until bubbles form and the edges are dry",
      "Flip and cook until browned",
      "Repeat with remaining batter, makes about 8",
    ],
    notes: [""],
  },
};

export default {
  lunch: lunch,
  dinner: dinner,
  sweets: sweets,
};
