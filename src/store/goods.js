const goods = {
  state: {
    title: "For your pleasure",
    goods: [
      {
        id: 0,
        icon: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        icon: "good-1.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        icon: "good-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        icon: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 4,
        icon: "good-1.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 5,
        icon: "good-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
    ],
  },
  getters: {
    getGoods(state) {
      return {
        title: state.title,
        goods: state.goods,
      };
    },
  },
};
export default goods;
