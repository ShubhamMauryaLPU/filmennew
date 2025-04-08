const foodData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVsaWNpb3VzJTIwUGl6emF8ZW58MHx8MHx8fDA%3D",
    title: "Delicious Pizza",
    imageAvif:"https://images.unsplash.com/photo-1693609930470-2eb935294945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVsaWNpb3VzJTIwUGl6emF8ZW58MHx8MHx8fDA%3D",
    imageWebp:"https://images.unsplash.com/photo-1693609930470-2eb935294945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGVsaWNpb3VzJTIwUGl6emF8ZW58MHx8MHx8fDA%3D",
    description: "A tasty cheese and pepperoni pizza with a crispy crust.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SnVpY3klMjBCdXJnZXJ8ZW58MHx8MHx8fDA%3D",
    title: "Juicy Burger",
    imageAvif:"https://images.unsplash.com/photo-1571161932870-41bc96691d58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SnVpY3klMjBCdXJnZXJ8ZW58MHx8MHx8fDA%3D",
    imageWebp:"https://images.unsplash.com/photo-1571161932870-41bc96691d58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SnVpY3klMjBCdXJnZXJ8ZW58MHx8MHx8fDA%3D",
    description: "A mouthwatering beef burger with fresh lettuce and tomatoes.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1563612116828-a62f45c706e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RnJlc2glMjBTdXNoaXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Fresh Sushi",
    imageAvif:"https://plus.unsplash.com/premium_photo-1664648119295-e52d27cbfbc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlc2glMjBTdXNoaXxlbnwwfHwwfHx8MA%3D%3D",
    imageWebp:"https://plus.unsplash.com/premium_photo-1664648119295-e52d27cbfbc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlc2glMjBTdXNoaXxlbnwwfHwwfHx8MA%3D%3D",
    description: "An assortment of fresh sushi rolls with soy sauce.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1570549986390-6bd150ac3515?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3JlYW15JTIwUGFzdGF8ZW58MHx8MHx8fDA%3D",
    title: "Creamy Pasta",
    imageAvif:"https://images.unsplash.com/photo-1739986908527-cef1d0d303c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3JlYW15JTIwUGFzdGF8ZW58MHx8MHx8fDA%3D",
    imageWebp:"https://images.unsplash.com/photo-1734775615856-628b2194a978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q3JlYW15JTIwUGFzdGF8ZW58MHx8MHx8fDA%3D",
    description: "A creamy alfredo pasta topped with parmesan cheese.",
  },
  {
    id: 5,
    image: "https://plus.unsplash.com/premium_photo-1690263582976-a5c2890b0ae2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGVhbHRoeSUyMFNhbGFkfGVufDB8fDB8fHww",
    title: "Healthy Salad",
    description: "A fresh garden salad with crisp vegetables and vinaigrette.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1611171711791-b34fa42e9fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JpbGxlZCUyMFN0ZWFrfGVufDB8fDB8fHww",
    title: "Grilled Steak",
    description: "A perfectly grilled steak with garlic butter.",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1584278858944-7c34f1d94db0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rmx1ZmZ5JTIwUGFuY2FrZXN8ZW58MHx8MHx8fDA%3D",
    title: "Fluffy Pancakes",
    description: "Soft pancakes with maple syrup and fresh berries.",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1611250188496-e966043a0629?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGFzdHklMjBUYWNvc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Tasty Tacos",
    description: "Mexican-style tacos with fresh salsa and guacamole.",
  },
  {
    id: 9,
    image: "https://source.unsplash.com/400x300/?ramen",
    title: "Savory Ramen",
    description: "A hot bowl of ramen with rich broth and tender noodles.",
  },
  {
    id: 10,
    image: "https://source.unsplash.com/400x300/?donuts",
    title: "Sweet Donuts",
    description: "Assorted donuts with different delicious toppings.",
  },
  {
    id: 11,
    image: "https://source.unsplash.com/400x300/?icecream",
    title: "Chilled Ice Cream",
    description: "A scoop of creamy ice cream in various flavors.",
  },
  {
    id: 12,
    image: "https://source.unsplash.com/400x300/?sandwich",
    title: "Classic Sandwich",
    description: "A wholesome sandwich packed with fresh ingredients.",
  },
];

export default foodData
