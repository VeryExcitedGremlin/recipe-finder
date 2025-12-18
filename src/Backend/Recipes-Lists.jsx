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

const dinner = [];

dinner.push(
  new Card(
    "Beef Stroganoff",
    placeholder,
    "My go-to favorite! Easy and delicious.",
    ["beef", "pasta"]
  ),
  new Card("Whole Turkey", placeholder, "Great for the holidays!", [
    "holiday",
    "whole bird",
  ]),
  new Card(
    "Steak Fajitas",
    placeholder,
    "Prep the night before for tender marinated steak.",
    ["marinade", "beef"]
  ),
  new Card(
    "Tomato Sauce",
    placeholder,
    "Savory and delicious. Takes a couple hours.",
    ["pasta"]
  )
);

const sweets = [];

sweets.push(
  new Card("Chocolate Chip Cookies", placeholder, "Oh so soft and chewy.", [
    "dessert",
    "cookies",
  ]),
  new Card("Pancakes", placeholder, "A breakfast classic!", ["breakfast"])
);

export default {
  lunch: lunch,
  dinner: dinner,
  sweets: sweets,
};

// ,
// new Card(
//   "",
//   placeholder,
//   "",
//   []
// )
