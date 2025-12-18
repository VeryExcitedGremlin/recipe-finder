// new Card(
//   "",
//   placeholder,
//   "",
//   [""]
// );

const placeholder = "https://placehold.co/50";

class Card {
  constructor(name, img, desc, filter) {
    this.name = name;
    this.link = name.replaceAll(" ", "-");
    this.img = img;
    this.description = desc;
    this.filter = filter;
  }
}

const lunch = [];
lunch.push(
  new Card(
    "Chicken Fried Rice",
    placeholder,
    "A great use for leftover chicken or rice.",
    ["chicken", "rice"]
  ),
  new Card(
    "Shrimp Scampi",
    placeholder,
    "Garlic buttery with a white wine and lemon sauce.",
    ["pasta", "shrimp"]
  )
);

const dinner = [
  {
    name: "Beef Stroganoff",
    link: "Beef-Stroganoff",
    img: placeholder,
    description: "My go-to favorite! Easy and delicious.",
    filter: ["beef", "pasta"],
  },
  {
    name: "Whole Turkey",
    link: "Whole-Turkey",
    img: placeholder,
    description: "Great for the holidays!",
    filter: ["holiday", "whole bird"],
  },
  {
    name: "Steak Fajitas",
    link: "Steak-Fajitas",
    img: placeholder,
    description: "Prep the night before for tender marinated steak.",
    filter: ["marinade", "beef"],
  },
  {
    name: "Tomato Sauce",
    link: "Tomato-Sauce",
    img: placeholder,
    description: "Savory and delicious. Takes a couple hours.",
    filter: ["pasta"],
  },
];

const sweets = [
  {
    name: "Chocolate Chip Cookies",
    link: "Chocolate-Chip-Cookies",
    img: placeholder,
    description: "Oh so soft and chewy.",
    filter: ["dessert", "cookies"],
  },
  {
    name: "Pancakes",
    link: "Pancakes",
    img: placeholder,
    description: "A breakfast classic!",
    filter: ["breakfast"],
  },
];

export default {
  lunch: lunch,
  dinner: dinner,
  sweets: sweets,
};
