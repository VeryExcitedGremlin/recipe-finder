// {name: '', link: '', img: 'https://placehold.co/40', description: ''}
const placeholder = 'https://placehold.co/50'

const lunch = [
  { name: "Chicken Fried Rice", link: "", img: placeholder, description: 'A great use for leftover chicken or rice.' },
];

const dinner = [
  { name: "Beef Stroganoff", link: "", img: placeholder, description: 'My go-to favorite! Easy and delicious.' },
];

const sweets = [
    {
      name: "Chocolate Chip Cookies",
      link: "",
      img: placeholder,
      description: "Oh so soft and chewy.",
      filter: ['dessert', 'cookies']
    },
    {
      name: "Pancakes",
      link: "",
      img: placeholder,
      description: "A breakfast classic!",
      filter: ['breakfast']
    },
  ];

export default {
  lunch: lunch,
  dinner: dinner,
  sweets: sweets,
};