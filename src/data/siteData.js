// ─── Hours ────────────────────────────────────────────────────────────────────
export const hours = [
  { day: 'Monday',    open: true,  hours: '7:00 AM – 4:00 PM' },
  { day: 'Tuesday',   open: true,  hours: '7:00 AM – 4:00 PM' },
  { day: 'Wednesday', open: true,  hours: '7:00 AM – 4:00 PM' },
  { day: 'Thursday',  open: true,  hours: '7:00 AM – 4:00 PM' },
  { day: 'Friday',    open: true,  hours: '7:00 AM – 4:00 PM' },
  { day: 'Saturday',  open: false, hours: 'Closed' },
  { day: 'Sunday',    open: false, hours: 'Closed' },
]

// ─── Reviews ──────────────────────────────────────────────────────────────────
export const reviews = [
  {
    name: 'Jasmin Hollywood',
    stars: 5,
    text: 'You can smell the deliciousness of the food throughout the lobby — it\'s so good! I\'ve had their chicken noodle soup and chicken vegetable soup which was official. Nice family owned business; they are kind and hardworking.',
  },
  {
    name: 'Ashli Bess',
    stars: 5,
    text: 'Best little deli in the area. It\'s very convenient to my office, fast and delicious. The women who work there are super nice. I\'m not a sandwich person, so I recommend any of the breakfasts and the teriyaki bowls.',
  },
  {
    name: 'Shola B.',
    stars: 5,
    text: 'This is the hole in the wall everyone needs to know about! Breakfast is so delicious and has the homemade taste to it! It\'s quick and perfect. The lunch is amazing too. 10 stars for me!!!!',
  },
  {
    name: 'Krystyna Russell',
    stars: 5,
    text: 'The most humble lady I have met. The place is busy, but worth it!!! Delicious.',
  },
  {
    name: 'Norman M. Wereley',
    stars: 5,
    text: 'Ordered a turkey club sandwich. It was excellent! Comes with a pickle, fries and a drink for the combo. Outstanding lunch!',
  },
]

// ─── Featured Items (hero spotlights) ─────────────────────────────────────────
export const featured = [
  {
    name: 'Club Special',
    price: '$10.99',
    description: 'Ham, turkey, chicken, or tuna salad with lettuce, tomato, bacon, and mayo. Your choice of bread.',
    note: 'w/ chips. Add fries +$1',
    image: '/images/club.jpg',
  },
  {
    name: 'Mr. Reuben',
    price: '$8.99',
    description: 'Corned beef with melted swiss cheese, sauerkraut, and Russian dressing on grilled rye bread.',
    image: '/images/reuben.jpg',
  },
  {
    name: 'Cobb Salad',
    price: '$10.99',
    description: 'Grilled chicken, avocado, bacon, black olives, eggs, tomatoes, and crumbled blue cheese over romaine.',
    image: '/images/chickenSalad.jpg',
  },
  {
    name: 'The Alice',
    price: '$8.99',
    description: 'Grilled chicken breast with avocado, bacon, and chipotle mayo on a toasted kaiser roll.',
    image: '/images/newavo.png',
  },
  {
    name: 'Chicken Teriyaki Bowl',
    price: '$9.99',
    description: 'Grilled chicken marinated in homemade teriyaki sauce, layered on rice with fresh veggies.',
    image: '/images/newbowl.png',
  },
  {
    name: 'The Chicken Fantasy',
    price: '$8.99',
    description: 'Grilled chicken with melted provolone, lettuce, tomato, and honey mustard on your choice of bread.',
    image: '/images/chickenWrap.jpg',
  },
]

// ─── Full Menu ────────────────────────────────────────────────────────────────
export const menuCategories = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    note: 'Served until 11:00 AM',
    items: [
      {
        name: 'Egg Sandwich',
        price: '$3.99',
        description: 'On your choice of bread.',
        options: [
          'w/ bacon, ham, sausage, turkey bacon, or scrapple — $4.99',
          'w/ steak — $5.99',
          'w/ salmon cake — $5.49',
          'On a bagel or croissant add $1.00 · With cheese add $0.50',
        ],
      },
      {
        name: 'Bagel',
        price: '$1.99',
        description: 'Plain or with butter.',
        options: ['w/ cream cheese — $3.29'],
      },
      {
        name: 'Breakfast Platters',
        price: 'from $6.99',
        description: 'Served with toast and home fries.',
        options: [
          'Twin Egg: 2 eggs any style & meat — $9.99',
          'Triple Egg: 3 eggs any style & meat — $10.99',
          'Duet: 2 eggs any style & meat (no home fries) — $6.99',
          'Salmon Cake: 2 eggs any style & salmon cake — $10.99',
          'Meat choice: bacon, ham, sausage patty, turkey bacon, or scrapple',
        ],
      },
      {
        name: 'Omelettes',
        price: '$9.99',
        description: 'Made to order.',
        options: [
          'Western: ham, cheese, green peppers, onions',
          'Atkins: ham & cheese w/ side of turkey bacon',
          'Meat & Cheese: your choice of meat and cheese',
          'Veggie: cheese, mushrooms, green peppers, onions, tomatoes',
        ],
      },
      {
        name: 'Pancake Platters',
        price: '$6.99',
        description: '3 pancakes.',
        options: [
          'with choice of meat — $7.99',
          'Combo: 2 eggs and 2 pancakes — $7.99',
          'Deluxe: 2 eggs, 2 pancakes with choice of meat — $9.99',
          'Banana pancakes — $6.99',
        ],
      },
      {
        name: 'French Toast',
        price: '$6.99',
        description: '3 pieces.',
        options: [
          'with choice of meat — $7.99',
          'Deluxe: 2 eggs, 2 french toast with choice of meat — $9.99',
        ],
      },
    ],
  },
  {
    id: 'grill',
    label: 'Off the Grill',
    note: null,
    items: [
      { name: 'Steak and Cheese',         price: '$10.99', description: 'Thinly sliced ribeye grilled with onions and melted provolone on a toasted sub roll with lettuce, tomato, and mayo.' },
      { name: 'Chicken Steak and Cheese', price: '$10.99', description: 'Sliced chicken breast grilled with onions and melted provolone on a toasted sub roll with lettuce, tomato, and mayo.' },
      { name: 'Deluxe Steak and Cheese',  price: '$12.99', description: 'Our steak and cheese plus bacon, green peppers, and mushrooms. Also available in chicken.' },
      { name: 'Tuna Melt',                price: '$7.99',  description: 'Tuna salad melted with cheese on toasted bread.' },
      { name: 'Hamburger',                price: '$7.49',  description: 'Classic burger on a bun.' },
      { name: 'Cheeseburger',             price: '$7.99',  description: 'Classic burger topped with your choice of cheese.' },
      { name: 'Turkey Burger',            price: '$7.99',  description: 'Lean and flavorful turkey patty.' },
      { name: 'Augustine Burger',         price: '$9.99',  description: 'Bacon cheeseburger topped with avocado, lettuce, tomato, mayo, and onions on a kaiser roll.', tag: 'Fan Favorite' },
      { name: 'Salmon Burger',            price: '$9.49',  description: 'Fresh salmon patty served on a bun.' },
      { name: 'Fish Sandwich',            price: '$7.99',  description: 'Fried fish fillet on a bun.' },
      { name: 'Fish Platter',             price: '$10.99', description: 'Fried whiting filet with cole slaw and steamed rice or fries.' },
      { name: 'Grilled Cheese',           price: '$3.99',  description: 'With bacon or ham — $5.99.' },
      { name: 'Chicken Tender Basket',    price: '$8.99',  description: '4 pieces with fries.' },
      { name: 'Chicken Wings',            price: '$8.99',  description: '6 wings with fries.' },
    ],
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    note: 'Most available as a wrap too',
    items: [
      { name: 'Roast Beef',          price: '$8.99',  description: 'Sliced roast beef on your choice of bread.', options: ['Wrap — $9.99'] },
      { name: 'Turkey Breast',       price: '$8.99',  description: 'Sliced turkey breast on your choice of bread.', options: ['Wrap — $9.99'] },
      { name: 'Virginia Baked Ham',  price: '$7.99',  description: 'Virginia baked ham on your choice of bread.', options: ['Wrap — $9.99'] },
      { name: 'Corned Beef',         price: '$7.99',  description: 'Sliced corned beef on your choice of bread.', options: ['Wrap — $9.99'] },
      { name: 'Pastrami',            price: '$7.99',  description: 'Sliced pastrami on your choice of bread.', options: ['Wrap — $9.99'] },
      { name: 'Pulled Chicken Salad',price: '$7.99', description: 'House chicken salad on your choice of bread.', options: ['Wrap — $9.99'] },
      { name: 'Tuna Salad',          price: '$6.99',  description: 'Fresh tuna salad on your choice of bread.', options: ['Wrap — $9.99'] },
      { name: 'Egg Salad',           price: '$6.99',  description: 'House egg salad on your choice of bread.', options: ['Wrap — $9.99'] },
      { name: 'BLT',                 price: '$7.99',  description: 'Bacon, lettuce, and tomato on your choice of bread.', options: ['Wrap — $9.99'] },
      { name: 'Beef Hot Dog',        price: '$3.99',  description: 'All-beef frank on a bun.' },
      { name: 'Chili Cheese Dog',    price: '$5.99',  description: 'All-beef frank with homemade chili and melted cheese.' },
      { name: 'Club Special',        price: '$10.99', description: 'Ham, turkey, chicken salad, or tuna salad with lettuce, tomato, bacon, and mayo. w/ chips — add fries for $1.', options: ['Roast Beef Club — $11.99', 'Egg Salad Club — $9.99'], tag: 'Best Seller' },
    ],
  },
  {
    id: 'faves',
    label: 'Uptown Faves',
    note: 'Add avocado or spinach to any sandwich for $1 · Add 16 oz. fountain drink & fries for only $2.99 more!',
    items: [
      { name: 'Veggie Wrap',         price: '$8.99',  description: 'Assorted veggies and hummus in a wheat wrap.' },
      { name: 'The Chicken Fantasy', price: '$8.99',  description: 'Grilled chicken breast with melted provolone, lettuce, tomato, and honey mustard on your choice of bread.', tag: 'Fan Fave' },
      { name: 'Mr. Reuben',          price: '$8.99',  description: 'Corned beef with melted swiss cheese, sauerkraut, and Russian dressing on grilled rye bread.', tag: 'Classic' },
      { name: 'Uptown Delight',      price: '$9.99',  description: 'Hot pastrami and melted swiss grilled on pumpernickel or multi-grain, topped with cole slaw and Russian dressing.', tag: 'Uptown Original' },
      { name: 'Y2K BLT',             price: '$8.99',  description: 'Grilled cheese with bacon, avocado, lettuce, and tomato on your choice of bread.' },
      { name: 'Turkey Reuben',       price: '$8.99',  description: 'Sliced turkey breast and melted swiss with cole slaw and Russian dressing on rye or multi-grain.' },
      { name: 'The Golden Bear',     price: '$10.99', description: 'Tender roast beef and melted provolone with cole slaw and Russian dressing on rye or multi-grain.' },
      { name: 'Italian Cold Cut',    price: '$10.99', description: 'Genoa salami, mortadella, capicola ham, provolone, onions, lettuce, tomato, mayo, oil & vinegar, and hot peppers on a sub roll.' },
      { name: 'Washingtonian',       price: '$10.99', description: 'Hot turkey baked with crispy bacon and melted provolone with lettuce, tomato, and mayo on a toasted sub roll.' },
      { name: 'Virginian',           price: '$10.99', description: 'Virginia smoked ham baked with crispy bacon and melted provolone with lettuce, tomato, and mayo on a toasted sub roll.' },
      { name: 'California Special',  price: '$10.99', description: 'Lean roast beef, cream cheese, and horseradish with lettuce and tomato in a wheat wrap.' },
      { name: 'The Par 5',           price: '$10.99', description: 'Grilled roast beef and melted provolone with green peppers, mushrooms, onions, and blue cheese dressing in a wrap.' },
      { name: 'The Alice',           price: '$8.99',  description: 'Grilled chicken breast with avocado, bacon, and chipotle mayo on a toasted kaiser roll.', tag: 'Must Try' },
    ],
  },
  {
    id: 'bowls',
    label: 'Teriyaki Bowls',
    note: 'Your choice of protein marinated in homemade teriyaki sauce, grilled and layered on rice with veggies',
    items: [
      { name: 'Veggie Bowl',     price: '$6.99',  description: 'Fresh seasonal vegetables in homemade teriyaki sauce over rice.' },
      { name: 'Chicken Bowl',    price: '$9.99',  description: 'Grilled chicken in homemade teriyaki sauce over rice with veggies.', options: ['Double meat +$2.99'], tag: 'Fan Favorite' },
      { name: 'Salmon Teriyaki', price: '$12.99', description: 'Grilled salmon in homemade teriyaki sauce over rice with veggies.' },
      { name: 'Steak Teriyaki',  price: '$10.99', description: 'Grilled steak in homemade teriyaki sauce over rice with veggies.' },
      { name: 'Shrimp Teriyaki', price: '$13.99', description: 'Grilled shrimp in homemade teriyaki sauce over rice with veggies.' },
    ],
  },
  {
    id: 'salads',
    label: 'Salads',
    note: null,
    items: [
      { name: 'Grilled Chicken Salad', price: '$10.99', description: 'Grilled chicken over a bed of romaine lettuce and mixed greens.' },
      { name: 'Grilled Salmon Salad',  price: '$12.99', description: 'Grilled salmon over a bed of romaine and mixed greens.' },
      { name: 'Chef Salad',            price: '$10.99', description: 'Ham and turkey over a bed of romaine lettuce and mixed greens.' },
      { name: 'The Scooper',           price: '$9.99',  description: 'A garden salad with a scoop of chicken or tuna salad.' },
      { name: 'Cobb Salad',            price: '$10.99', description: 'Grilled chicken, avocado, bacon, black olives, eggs, tomatoes, and crumbled blue cheese over romaine.', tag: 'Fan Fave' },
      { name: 'Garden Salad',          price: '$5.99',  description: 'Mixed greens, tomatoes, eggs, cheese, and croutons.' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks & More',
    note: null,
    items: [
      { name: 'Fruit Smoothie',  price: '$5.99', description: 'All-fruit smoothies made fresh.' },
      { name: 'Bubble Tea',      price: '$6.99', description: 'Strawberry-banana, taro, pineapple-coconut, pineapple mango, or honeydew.', options: ['Add protein boost +$1.00'] },
      { name: 'Homemade Chili',  price: '$5.99', description: 'Rich and hearty house-made chili.' },
      { name: 'Soup of the Day', price: '$5.99', description: 'Ask us what\'s fresh today.' },
      { name: 'French Fries',    price: '$3.99', description: 'Classic golden fries.' },
      { name: 'Side of Bacon',   price: '$3.99', description: 'Crispy and fresh.' },
      { name: 'Cole Slaw',       price: '$2.99', description: 'Creamy house-made cole slaw.' },
    ],
  },
]
