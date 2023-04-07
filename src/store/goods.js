const goods = {
  state: {
    title: "For your pleasure",
    goods: [
      {
        id: 0,
        img: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        img: "good-1.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        img: "good-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        img: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 4,
        img: "good-1.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 5,
        img: "good-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
    ],
  },
  mutations: {
    setGoodsData(state, data) {
      state.goods = data;
    },
  },
  actions: {
    setGoodsData({ commit }, data) {
      commit("setGoodsData", data);
    },
  },
  getters: {
    getGoods(state) {
      return {
        title: state.title,
        goods: state.goods,
      };
    },
    getGoodsById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id);
      };
    },
  },
};
export default goods;
