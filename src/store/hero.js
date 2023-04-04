const hero = {
  state: {
    title: "Everything You Love About Coffee",
    bestSellers: [
      {
        id: 0,
        icon: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: 1,
        icon: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        price: 15.99,
      },
      {
        id: 2,
        icon: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        price: 6.99,
      },
    ],
  },
  getters: {
    getHero(state) {
      return {
        title: state.title,
        bestSellers: state.bestSellers,
      };
    },
  },
};
export default hero