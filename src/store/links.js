const links = {
  state: {
    header: {
      id: 0,
      link: "/",
      icon: "Logo.svg",
    },
    footer: {
      id: 0,
      link: "/",
      icon: "Logo_black.svg",
    },
    privacy: {
      id: 0,
      text: "договором оферты",
      link: "/privacy",
    },
    other: [
      {
        id: 1,
        text: "Our coffee",
        link: "/our-coffee",
      },
      {
        id: 2,
        text: "For your pleasure",
        link: "/for-your-pleasure",
      },
      {
        id: 3,
        text: "Contact us",
        link: "/contacts",
      },
    ],
  },
  getters: {
    getHeaderLinks(state) {
      return {
        header: state.header,
        other: state.other,
      };
    },
    getFooterLinks(state) {
      return {
        footer: state.footer,
        other: state.other,
      };
    },
    getPrivacyLinks(state){
     return state.privacy 
    }
  },
};
export default links