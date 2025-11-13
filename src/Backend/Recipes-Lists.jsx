// {name: '', link: '', img: 'https://placehold.co/40', description: ''}

const lunch = [
  { name: "Chicken Fried Rice", link: "", img: "https://placehold.co/10", description: 'A great use for leftover chicken or rice.' },
];

const dinner = [
  { name: "Beef Stroganoff", link: "", img: "https://placehold.co/10", description: 'My go-to favorite! Easy and delicious.' },
];

const sweets = [
    {
      name: "Chocolate Chip Cookies",
      link: "",
      img: "https://placehold.co/10",
      description: "Oh so soft and chewy.",
      filter: ['dessert', 'cookies']
    },
    {
      name: "Pancakes",
      link: "",
      img: "https://placehold.co/10",
      description: "A breakfast classic!",
      filter: ['breakfast']
    },
  ];

export default {
  lunch: lunch,
  dinner: dinner,
  sweets: sweets,
};