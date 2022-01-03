import { createStore } from 'vuex'
import productsList from '../data/productsList'

// findProduct = () =>{

// }

export default createStore({
  state: {
    productsList: productsList
  },
  getters:{
    shortDescription: state => product =>{
      return state.productsList
        .find((productListItem) => productListItem.id === product.id)
        .description.substring(0, 50);
      // return product.description.substring(0, 50);
    } 
  },
  mutations: {},
  actions: {},
  modules: {},
});
