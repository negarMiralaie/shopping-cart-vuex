import { createStore } from "vuex";
import productsList from "../data/productsList";

// const isLocalStorageSupported = () => {
//   if (isLocalStorage()) {
//     return true;
//   }

//   return false;
// };

// const syncCartWithLocalStorage = (cart) =>{
//   cart = localStorage.getItem(cart);
//   console.log(JSON.parse(JSON.stringify(cart)));
// }

const addToCart = (cart, product) => {

  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.push({ product: product, amount: 1 });
    updateLocalStorageCart(cart);
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.push({ product: product, amount: 10 });
    updateLocalStorageCart(cart);
  }
};

const GetProductIndexInCart = (cart, productId) => {
  let productIndex = -1;
  let index = -1;

  if (cart === null) {
    localStorage.setItem(cart, JSON.stringify(cart));
    return productIndex;
  } else {
    console.log(typeof cart);
    cart.forEach((cartItem) => {
      index++;
      if (cartItem.product.id === productId) {
        productIndex = index;
        return false;
      }
    });
    return productIndex;
  }
};

const updateLocalStorageCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export default createStore({
  state: {
    productsList: productsList,
    isShowProductDetails: false,
    cart: [],
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
    },
    ADD_TO_CART(state, product) {
      console.log(typeof state.cart)
      addToCart(state.cart, product);
    },
    SYNC_CART_WITH_LOCAL_STORAGE(state) {
      state.cart = localStorage.getItem("cart");
      console.log(JSON.parse(JSON.stringify(state.cart)));
    },
  },
  actions: {},
  modules: {},
});
