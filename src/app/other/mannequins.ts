export default {

  item: {
    name: '',
    price: 0,
    category: '',
    description: '',
    imageUrl: '',
    weight: 0
  },

  category: {
    name: '',
    imageUrl: ''
  },

  order: {
    user: '',
    date: new Date(),
    email: '',
    address: '',
    totalPrice: 0,
    items: []
  },

  user: {
    login: '',
    email: '',
    phone: '',
    imageUrl: '',
    password: '',
    confirm: ''
  }

};
