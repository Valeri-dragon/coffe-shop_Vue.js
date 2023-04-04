const ourCoffee = {
  state: {
    title: "Our Coffee",
    coffee: [
      {
        id: 0,
        icon: "coffee-3.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        icon: "coffee-3.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        icon: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        icon: "coffee-3.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 4,
        icon: "coffee-3.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 5,
        icon: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
    ],
  },
  getters: {
    getOurCoffee(state){
      return{
        title: state.title,
        coffee: state.coffee
      }
    }
  },
};
export default ourCoffee