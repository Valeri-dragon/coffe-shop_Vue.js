const ourCoffee = {
  state: {
    title: "Our Coffee",
    coffee: [
      {
        id: 0,
        img: "coffee-3.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        img: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        img: "coffee-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        img: "coffee-3.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 4,
        img: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 5,
        img: "coffee-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
    ],
  },
  mutations: {
    setCoffeeData(state, data){
      state.coffee = data
    }
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
  },
  getters: {
    getOurCoffee(state) {
      return {
        title: state.title,
        coffee: state.coffee,
      };
    },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    },
  },
};
export default ourCoffee;
