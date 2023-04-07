const itemProduct = {
  state: {
    product: null,
  },
  mutations: {
    setData(state, data) {
      state.product = data;
    },
  },
  actions: {
    setData({ commit }, data) {
      commit("setData", data);
    },
  },
  getters: {
    getData(state) {
      return state.product;
    },
  },
};
export default itemProduct;
