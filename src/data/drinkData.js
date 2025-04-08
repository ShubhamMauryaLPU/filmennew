const drinkData = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1674406102318-c9d362ad510b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SG90JTIwQ29mZmVlfGVufDB8fDB8fHww",
    title: "Hot Coffee",
    imageWebp:"https://plus.unsplash.com/premium_photo-1719617327169-c7c1f3bd18c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90Y29mZmVlfGVufDB8fDB8fHww",
    imageAvif:"https://images.unsplash.com/photo-1606589122601-c20330ddbd90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90Y29mZmVlfGVufDB8fDB8fHww",
    description: "A cup of freshly brewed coffee to start your day.",
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1722686478640-ba1241036f1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UmVmcmVzaGluZyUyMFRlYXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Refreshing Tea",
    imageAvif:"https://plus.unsplash.com/premium_photo-1668771899438-0d45ddcb5979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpbGxlZCUyMENvY2t0YWlsfGVufDB8fDB8fHww",
    imageWebp:"https://images.unsplash.com/photo-1694966225294-0bfd41a9be3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENoaWxsZWQlMjBDb2NrdGFpbHxlbnwwfHwwfHx8MA%3D%3D",
    description: "A soothing cup of green tea with honey.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJ1aXQlMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Fruit Smoothie",
    imageAvif:"https://plus.unsplash.com/premium_photo-1663126827264-409d695e0be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJ1aXQlMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D",
    imageWebp:"https://plus.unsplash.com/premium_photo-1663126827264-409d695e0be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJ1aXQlMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "A blended smoothie packed with fresh fruits and yogurt.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1663908672815-fd62829ad3f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpbGxlZCUyMENvY2t0YWlsfGVufDB8fDB8fHww",
    title: "Chilled Cocktail",
    imageAvif:"https://images.unsplash.com/photo-1690983319841-ef2559d164b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hpbGxlZCUyMENvY2t0YWlsfGVufDB8fDB8fHww",
    imageWebp:"https://images.unsplash.com/photo-1620360289812-0abdae69d6d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hpbGxlZCUyMENvY2t0YWlsfGVufDB8fDB8fHww",
    description: "A refreshing cocktail with a mix of tropical flavors.",
  },
  {
    id: 5,
    image: "https://source.unsplash.com/400x300/?lemonade",
    title: "Fresh Lemonade",
    description: "A cool and tangy homemade lemonade.",
  },
  {
    id: 6,
    image: "https://source.unsplash.com/400x300/?milkshake",
    title: "Creamy Milkshake",
    description: "A thick and creamy milkshake with your favorite flavors.",
  },
  {
    id: 7,
    image: "https://source.unsplash.com/400x300/?soda",
    title: "Classic Soda",
    description: "A fizzy and refreshing soda drink.",
  },
  {
    id: 8,
    image: "https://source.unsplash.com/400x300/?mojito",
    title: "Mint Mojito",
    description: "A refreshing mint and lime mojito with ice.",
  },
  {
    id: 9,
    image: "https://source.unsplash.com/400x300/?coconut-water",
    title: "Coconut Water",
    description: "A hydrating coconut water straight from the coconut.",
  },
  {
    id: 10,
    image: "https://source.unsplash.com/400x300/?energy-drink",
    title: "Energy Drink",
    description: "A power-packed energy drink to boost your stamina.",
  },
  {
    id: 11,
    image: "https://source.unsplash.com/400x300/?iced-tea",
    title: "Iced Tea",
    description: "A chilled glass of iced tea with lemon.",
  },
  {
    id: 12,
    image: "https://source.unsplash.com/400x300/?hot-chocolate",
    title: "Hot Chocolate",
    description: "A warm and creamy hot chocolate topped with marshmallows.",
  },
];

export default drinkData;
