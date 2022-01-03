import { createStore } from 'vuex'
import productsList from '../data/productsList'

export default createStore({
  state: {
    productsList: productsList,
    isShowProductDetails: false
  },
  getters: {
    shortDescription: (state) => (product) => {
      return state.productsList
        .find((productListItem) => productListItem.id === product.id)
        .description.substring(0, 50);
    },
  },
  mutations: {
    CHANGE_IS_SHOW_PRODUCT_DETAILS(state) {
      state.isShowProductDetails = !state.isShowProductDetails;
    }
  },
  actions: {},
  modules: {},
});
