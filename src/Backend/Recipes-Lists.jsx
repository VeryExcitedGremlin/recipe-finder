// {
//   name: '', 
//   link: '', 
//   img: placeholder, 
//   description: '', 
//   filter: ['']
// },

const placeholder = "https://placehold.co/50";

const lunch = [
  {
    name: "Chicken Fried Rice",
    link: "Chicken-Fried-Rice",
    img: placeholder,
    description: "A great use for leftover chicken or rice.",
  },
];

const dinner = [
  {
    name: "Beef Stroganoff",
    link: "Beef-Stroganoff",
    img: placeholder,
    description: "My go-to favorite! Easy and delicious.",
    filter: ["beef", "noodles"],
  },
  {
    name: "Whole Turkey",
    link: "Whole-Turkey",
    img: placeholder,
    description: "Great for the holidays!",
    filter: ["holiday", "whole bird"],
  },
  {
    name: 'Steak Fajitas',
    link: 'Steak-Fajitas',
    img: placeholder,
    description: 'Prep the night before for tender marinated steak.',
    filter: ['marinade', 'beef', 'peppers']
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
