const placeholder = "https://placehold.co/50";

class Card {
  constructor(name, cat, img, desc, filter) {
    this.name = name;
    this.link = [cat, name.replaceAll(" ", "-")];
    this.img = img;
    this.description = desc;
    this.filter = filter;
  }
}

const lunch = [];
let cat = "lunch";

lunch.push(
  new Card(
    "Chicken Fried Rice",
    cat,
    placeholder,
    "A great use for leftover chicken or rice.",
    ["chicken", "rice"]
  ),
  new Card(
    "Shrimp Scampi",
    cat,
    placeholder,
    "Garlic buttery with a white wine and lemon sauce.",
    ["pasta", "shrimp"]
  ),
  new Card("Beef and Broccoli", cat, placeholder, "", ["beef", "rice"]),
  new Card(
    "Chicken Alfredo",
    cat,
    placeholder,
    "Tender chicken with a creamy cheese sauce",
    ["chicken", "pasta"]
  ),
  new Card(
    "Swedish Meatballs",
    cat,
    placeholder,
    "Juicy meatballs in a savory gravy, serve with noodles or mashed potatos",
    ['ground meat', 'pasta']
  )
);

const dinner = [];
cat = "dinner";

dinner.push(
  new Card(
    "Beef Stroganoff",
    cat,
    placeholder,
    "My go-to favorite! Easy and delicious.",
    ["beef", "pasta"]
  ),
  new Card("Whole Turkey", cat, placeholder, "Great for the holidays!", [
    "holiday",
    "whole bird",
  ]),
  new Card(
    "Steak Fajitas",
    cat,
    placeholder,
    "Prep the night before for tender marinated steak.",
    ["marinade", "beef"]
  ),
  new Card(
    "Tomato Sauce",
    cat,
    placeholder,
    "Savory and delicious. Takes a couple hours.",
    ["pasta"]
  ),
  new Card("Roast Chicken", cat, placeholder, "An easy dinner staple", [
    "whole bird",
    "chicken",
  ])
);

const sweets = [];
cat = "sweets";

sweets.push(
  new Card(
    "Chocolate Chip Cookies",
    cat,
    placeholder,
    "Oh so soft and chewy.",
    ["dessert", "cookies", "chocolate"]
  ),
  new Card("Pancakes", cat, placeholder, "A breakfast classic!", ["breakfast"]),
  new Card("Peppermint Bark", cat, placeholder, "A minty winter classic", [
    "dessert",
    "chocolate",
    "holiday",
  ]),
  new Card("Spice Cake", cat, placeholder, "Not too sweet, perfect for the holidays", ['holiday', 'cake']),
  new Card("Cream Cheese Icing", cat, placeholder, "Great on cakes or cinnamon rolls", ['icing'])
);

export default {
  lunch: lunch,
  dinner: dinner,
  sweets: sweets,
};

// ,
// new Card(
//   "",
//   cat,
//   placeholder,
//   "",
//   []
// )
