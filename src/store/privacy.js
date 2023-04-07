const privacy = {
  state: {
    title: "Offer Agreement",
  },
  getters: {
    getPrivacy(state) {
      return {
        title: state.title,
             };
    },
  },
};
export default privacy