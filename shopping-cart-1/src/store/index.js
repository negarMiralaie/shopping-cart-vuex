import { createStore } from 'vuex'
import productsList from '../data/productsList'

export default createStore({
  state: {
    productsList: productsList
  },
  // getters:{
  //   return 
  // },
  mutations: {},
  actions: {},
  modules: {},
});
