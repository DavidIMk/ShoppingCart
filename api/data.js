const products = [
  {
    id: 01,
    name: 'Tea',
    available_quantity: 5,
    price: 450,
    description: 'A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water.'
  },

  {
    id: 02,
    name: 'Coffee',
    available_quantity: 7,
    price: 50,
    description: 'Brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species.'
  },

  {
    id: 03,
    name: 'Soft Drinks',
    available_quantity: 0,
    price: 500,
    description: 'A drink that usually contains carbonated water, a sweetener, and a natural or artificial flavoring.'
  },

  {
    id: 04,
    name: 'Mineral Water',
    available_quantity: 4,
    price: 1500,
    description: 'Water from a mineral spring that contains various minerals, such as salts and sulfur compounds.'
  },
];



const users = [
    {
      'name': 'david',
      'password': 'david'
    },
    {
      'name': 'guest',
      'password': 'guest'
    }
];

module.exports = { 'products': products, users: users }