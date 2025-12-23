class Recipe {
  constructor(name, ingredients, instructions, notes) {
    this[name.replaceAll(" ", "-")] = {
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      notes: notes,
    };
  }
}

const lunch = {};
let obj = lunch;

Object.assign(
  obj,
  new Recipe(
    "Shrimp Scampi",
    {
      "olive oil": "2 tablespoons",
      butter: "4 tablespoons",
      garlic: "4-5 cloves",
      "large shrimp": "1 1/4 lbs",
      "salt and pepper": "To taste",
      "dry white wine": "1/4 cup",
      "crushed red pepper flakes": "1/2 teaspoon",
      "lemon juice": "2 tablespoons",
      "parsley, chopped": "1/4 cup",
    },
    [
      "Heat olive oil and 2 tablespoons of butter in a large pan or skillet. Add garlic and saute until fragrant (about a minute).",
      "Add shrimp, season with salt and pepper and saute for 1-2 minutes on one side until just turning pink.",
      "Flip the shrimp. Add wine and pepper flakes, simmer 1-2 minutes or until wine is reduced to about half and shrimp is cooked through.",
      "Stir in lemon juice, parsley, and remaining butter then take offf heat immediately.",
      "Serve over noodles, rice, or steamed veggies.",
    ],
    ["You can sub the wine for chicken broth"]
  )
);
Object.assign(
  obj,
  new Recipe(
    "Chicken Fried Rice",
    {
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
    [
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
    ["I usually skip the peas and carrots"]
  )
);
Object.assign(
  obj,
  new Recipe(
    "Beef and Broccoli",
    {
      ginger: "1 teaspoon",
      garlic: "2 teaspoons",
      "hot water": "1/2 cup",
      "soy sauce": "6 tablespoons",
      "light brown sugar": "3 tablespoons",
      "corn starch": "1 1/2 tablespoons",
      "black pepper": "1/4 teaspoon",
      "sesame oil": "2 tablespoons",
      steak: "1 pound",
      "olive oil": "2 tablespoons",
      broccoli: "1 pound",
      "sesame seeds": "2 teaspoons",
    },
    [
      "Combine ginger, garlic, water, soy sauce, brown sugar, corn starch, pepper and sesame oil in a large container with a lid",
      "Slice steak into strips about 2 inches long and let rest in the sauce until ready to cook",
      "Heat 1 tbsp olive oil over medim heat. Add broccoli and cook 4-5 minutes, partially covered and stirring occassionally, until light green and tender. Remove and set aside",
      "Increase heat to high and add remaining olive oil. Remove beef from sauce and saute 2 minutes per side, or until just cooked through. Pull out a piece to check for doneness",
      "Add the sauce, reduce heat to medium-low and simmer 3-4 minutes until thickened",
      "Add broccoli and stir to combine. Add 1-2 tbsp water to thin sauce if desired",
      "Serve over white rice. Enjoy!",
    ],
    [
      "Start your rice first so it's ready!",
      "For softer broccoli, add 2 tbsp water before covering to steam",
    ]
  )
);
Object.assign(
  obj,
  new Recipe(
    "Chicken Alfredo",
    {
      "boneless, skinless chicken breasts": "2",
      "italian seasoning": "2 tsp",
      "olive oil": "1 tbsp",
      butter: "2 tbsp",
      "garlic, minced": "4 cloves",
      "heavy cream": "1 cup",
      "grated parmesan": "3/4 cup",
      "salt and pepper": "To taste",
      "chopped parsley, for garnish": "1 tbsp",
      fettuccine: "8 oz",
    },
    [
      "Start the pasta first, reserving 1/2 cup of the starchy water before draining",
      "Season both sides of the chicken breast with italian seasoning and a pinch of salt",
      "Heat oil in a large skillet over medium heat. Add chicken and cook 7-8 minutes each side, or until browned and cooked through",
      "Remove chicken to a plate and turn heat to medium-low",
      "Add butter and minced garlic to the skillet. Stir and cook 1-2 minutes until fragrant, scraping up any bits from the bottom of the pan",
      "Add heavy cream and wisk to combine, allowing to come to a simmer",
      "Once simmering, add grated parmesan. Whisk and stir until the parmesan has melted into the sauce",
      "Simmer the sauce for a few minutes, or until slightly thickened. Add salt and pepper to taste",
      "Add the pasta to the sauce and stir to combine. If the sauce becomes to othisk add 1-2 tbsp of pasta water at a time until at your preffered consistencey",
      "Slice the chicken breast and serve atop the pasta. Garnish with parsley if desired",
    ],
    [""]
  )
);

const dinner = {};
obj = dinner;

Object.assign(
  obj,
  new Recipe(
    "Beef Stroganoff",
    {
      "steak, cut into strips": "1 lb",
      "red wine": "1/2 cup",
      "unsalted butter": "8 tbsp",
      "olive oil": "2 tbsp",
      onion: 1,
      "brown mushrooms": "1/2 lb",
      "garlic, minced": "2 cloves",
      "all-purpose flour": "1 tbsp",
      "beef broth": "1 cup",
      yogurt: "1 cup",
      "worcestershire sauce": "1 tbsp",
      "dijon mustart": "1/2 tsp",
      "salt and pepper": "To taste",
      "egg noodles": "8-12 oz",
    },
    [
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
    [
      "You can substitute the yogurt for 1/4 cup sour cream + 3/4 cups heavy cream",
      "Serve over mashed potatos instead for a super creamy and delicious twist on a classic",
    ]
  )
);
Object.assign(
  obj,
  new Recipe(
    "Whole Turkey",
    {
      "whole turkey": "14 lbs",
      "olive oil": "1 tablespoon",
      sage: "1 tablespoon",
      "garlic powder": "2 teaspoons",
      paprika: "2 teaspoons",
      "salt and pepper": "To taste",
    },
    [
      "Place oven rack in lowest position. Preheat oven to 325°F",
      "Place turkey in pan breast-side up and brush with oil. Sprinkle seasoning mixture evenly over turkey. Cover loosely with heavy duty foil",
      "Roast 2 hours, adding an extra 15 minutes per pound for larger turkeys",
      "Remove foil. Roast 1 hour longer or until internal temperature in thigh reaches 165°F, basting occasionally with pan juices",
      "Remove turkey from oven. Let stand 20 minutes",
      "Transfer to platter or carving board and slice. Reserve pan juices to make gravy or to serve with turkey",
    ],
    ["For easy cleanup, line roasting pan with heavy duty foil"]
  )
);
Object.assign(
  obj,
  new Recipe(
    "Steak Fajitas",
    {
      "soy sauce": "1/2 cup",
      "lime juice": "1/2 cup",
      "avocado oil": "1/2 cup",
      "red wine": "1/4 cup",
      "brown sugar, packed": "1/4 cup",
      "chili powder": "1 tablespoon",
      "garlic, minced": "3 cloves",
      cumin: "2 teaspoons",
      "black pepper": "2 teaspoons",
      "steak, cut into strips": "2 pounds",
      "red, yellow, and green pepper, sliced": "1 each",
      "onion, sliced": "1",
      "corn starch": "1 tablespoon",
      "beef broth": "1/2 cup",
      "tortillas, sour cream, and shredded cheese": "For serving",
    },
    [
      "Mix the Marinade: Combine soy sauce, lime juice, avocado oil, red wine, brown sugar, chili powder, garlic, cumin, and black pepper in a medium bowl and whisk to combine. Transfer 3/4 cup (120ml) marinade to a large bowl and set aside.",
      "Place steaks in a gallon-sized zipper-lock bag and add remaining marinade. Seal bag, squeezing out as much air as possible. Massage bag until meat is fully coated in marinade. Lay flat in the refrigerator, turning every couple of hours, for at least 3 hours.",
      "Toss peppers and onion in bowl with reserved marinade. Refrigerate until ready to use.",
      "When ready to cook, pour marinade from steak into a cast iron skillet and heat.",
      "Cook beef until just browned on both sides. Remove to a plate and set aside, retaining the juices",
      "Add vegitables with marinade to pan. Cook until tender and most of the liquid has evaporated.",
      "Sprinkle the corn starch over the vegitables and stir well, avoiding clumps.",
      "Pour in beef broth, scraping any bits from the bottom of the pan",
      "Add back the beef and any accumulated juices, stir until warm.",
      "Warm tortillas for serving. Enjoy!",
    ],
    [""]
  )
);
Object.assign(
  obj,
  new Recipe(
    "Tomato Sauce",
    {
      tomatos: "4 lbs",
      "unsalted butter": "6 tablespoons",
      "olive oil": "4 tablespoons",
      onions: "2",
      garlic: "4 cloves",
      salt: "1 1/4 teaspoons",
      sugar: "1 teaspoon",
      basil: "2 tablespoons",
    },
    [
      "Bring a large pot of water to boil and set a side a large bowl about halfway full with ice water.",
      "Cut a 1/4 inch deep x on one end of each tomato. Place tomatos into the boiling water (I ike to use a spoon to gently place them in) and boil 1-2 minutes until the skin splits.",
      "Use a spoon to remove the tomatos from the boiling water and place them in the ice bath. Let cool 1-2 minutes, gently peel the skin with your hands and discard.",
      "Cut the tomatos into 1/2 inch chunks, discarding the cores, and transfer them to a sauce pan.",
      "Add butter, olive oil, onions, garlic, salt, and sugar to the tomatos. If using dried basil, add it now. Bring the mixture to a gentle boil, then reduce heat and simmer for 1 1/2 to 2 1/2 hours, stirring occasionally.",
      "Once the sauce is no longer wattery, strain the liquid into another pan and use a potato masher to mash any strained chunks. Add the mash back to the liquid. If using fresh basil, add it now.",
      "Season to taste and serve.",
    ],
    ["Add 4 cups of chicken broth for a creamy tomato soup."]
  )
);
Object.assign(
  obj,
  new Recipe(
    "Roast Chicken",
    {
      "whole chicken, giblets removed": "4-5 lbs",
      "olive oil": "4 tbsp",
      "Italian seasoning": "1/2 tsp",
      "salt and pepper": "To taste",
    },
    [
      "Preheat oven to 425 and place rack in lower 1/3",
      "Place chicken breast side up in an oven-safe pan. Pat chicken dry with a paper towel",
      "Drizzle chicken with 1 tbsp oil and spread with hands or a basting brush",
      "Sprinkle with salt, pepper, and italian seasoning. Drizzle with 1 tbsp oil and rub in with hands or basting brush",
      "Roast the chicken for 70-90 minutes, or until the juices run clear, flipping every 20-30 minutes",
      "After the first flip, season the other side just like the first (oil, seasoning, oil, spread)",
      "Check the chicken for doneness witha thermometer placed in the thickest part of the thigh. It should read 165",
      "Let the chicken rest for 15 minutes on a cutting board before slicing",
    ],
    [""]
  )
);

const sweets = {};
obj = sweets;

Object.assign(
  obj,
  new Recipe(
    "Chocolate Chip Cookies",
    {
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
    [
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
    [
      "Use a hand or stand mixer for the best results",
      "Instead of white and brown sugar, I use 1 cup of white sugar with a teaspoon of molasses.",
      "The dough should be stiff, not wet. If it's sticky, add a little flour at a time until it stiffens.",
    ]
  )
);
Object.assign(
  obj,
  new Recipe(
    "Pancakes",
    {
      "All-purpose flour": "1 1/2 cups",
      "baking powder": "3 1/2 teaspoons",
      sugar: "1 tablespoon",
      salt: "1/4 teaspoon",
      milk: "1 1/4 cups",
      "butter (melted)": "3 tablespoons",
      egg: 1,
    },
    [
      "Sift flour, baking powder, sugar, and salt together in a large bowl",
      "Make a well in the center, add milk, butter, and egg; mix until smooth",
      "Lightly oil griddle or pan and heat over medium-high heat",
      "Use about 1/4 cup of batter per pancake, cook 2-3 minutes until bubbles form and the edges are dry",
      "Flip and cook until browned",
      "Repeat with remaining batter, makes about 8",
    ],
    [""]
  )
);
Object.assign(
  obj,
  new Recipe(
    "Peppermint Bark",
    {
      "white chocolate, coarsely chopped": "12 ounces",
      "semi-sweet or bittersweet chocolate, coarsely chopped": "6 ounces",
      "vegetable oil or coconut oil": "1 1/2 tsp",
      "peppermint extract": "1/2 tsp",
      "regular-size candy canes, crushed": "2-3",
    },
    [
      "Line the bottom and sides of a 8-inch or 9-inch square baking pan with parchment paper or aluminum foil, smoothing out any wrinkles. Or use a lined baking sheet. Set aside.",
      "Place 6 ounces of white chocolate in a small heatproof bowl or a liquid measuring cup. Add 1/2 teaspoon of oil. Melt in 20-second increments, stirring vigorously with a silicone spatula or spoon after each increment, until completely melted and smooth. White chocolate and chocolate overheat easily, so it’s important to do this in increments.",
      "Once melted, stir in 1/4 teaspoon peppermint extract. Pour melted white chocolate into the prepared baking pan, and, with an offset spatula or spoon, spread into a thin smooth layer.",
      "Place the baking pan in the refrigerator for 10–15 minutes or until almost completely set. If it sets completely, the bark layers could separate. ",
      "Place semi-sweet chocolate in a small heatproof bowl or a liquid measuring cup. Add 1/2 teaspoon of oil. Repeat melting, just as you did with the white chocolate in step 2.",
      "Once melted, stir in remaining 1/4 teaspoon peppermint extract. Pour all of the semi-sweet chocolate over the white chocolate layer and spread it into a smooth layer. Place the baking pan back in the refrigerator for 10–15 minutes or until almost completely set.",
      "Place the remaining white chocolate in a small heatproof bowl or a liquid measuring cup. Add last 1/2 teaspoon of oil. Repeat melting, just as you did with the other layers. Pour over the bark layers and spread into a smooth layer. (This layer will not have peppermint extract.)",
      "Sprinkle evenly with crushed candy canes.",
      "Refrigerate the bark until completely set, about 1 hour.",
      "Once hardened, remove from the pan and peel off the foil or parchment. Break or cut into pieces as large or as small as you want. If your bark chilled in the refrigerator for longer than 3–4 hours, let it sit at room temperature for 10–15 minutes to slightly soften before breaking/slicing. (Or else the layers might separate.)",
      "Cover and store leftover bark in the refrigerator for up to 3 weeks. The bark can be left at room temperature for a few days in colder months, but it gets a little soft.",
    ],
    [
      "To crush candy canes, place the unwrapped candy canes in a sealed zipped-top bag and roll or bang with a rolling pin or meat mallet until crushed.",
    ]
  )
);

export default {
  lunch: lunch,
  dinner: dinner,
  sweets: sweets,
};

// Object.assign(
//  obj, new Recipe(
//   "",
//   {"": ""},
//   [""],
//   [""],
//  )
// );
