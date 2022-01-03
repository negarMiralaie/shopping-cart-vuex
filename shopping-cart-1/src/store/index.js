import { createStore } from 'vuex'
import productsList from '../data/productsList'

export default createStore({
  state: {
    productsList: productsList
  },
  getters:{
    shortDescription: state => product =>{
      return state.productsList
        .find((productListItem) => productListItem.id === product.id)
        .description.substring(0, 50);
    } 
  },
  mutations: {},
  actions: {},
  modules: {},
});
