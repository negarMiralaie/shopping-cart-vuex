import { createStore } from "vuex";
import productsList from "../data/productsList";

// const isLocalStorageSupported = () => {
//   if (isLocalStorage()) {
//     return true;
//   }

//   return false;
// };

const addToCart = (cart, product) => {
  // localStorage.clear();
  const productIndexInCart = GetProductIndexInCart(cart, product.id);
  console.log(JSON.parse(JSON.stringify(cart)));
  console.log(JSON.parse(JSON.stringify(localStorage.getItem(cart))));

  if (productIndexInCart > -1) {
    // console.log("already in cart");
    console.log(productIndexInCart);
    cart[productIndexInCart].amount++;
  } else {
    // console.log("not in cart");
    cart.push({ product: product, amount: 1 });
  }

  updateLocalStorageCart(cart);
};

const GetProductIndexInCart = (cart, productId) => {
  let productIndex = -1;
  let index = -1;

  cart.forEach((cartItem) => {
    index++;
    if (cartItem.product.id === productId) {
      productIndex = index;
      return false;
    }
  });
  return productIndex;
};

const updateLocalStorageCart = (cart) => {
  localStorage.setItem(cart, JSON.stringify(cart));
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
      // state.cart.product = amount;
      // updateLocalStorageCart();
      // console.log(state.cart);
      addToCart(state.cart, product);
    },
  },
  actions: {},
  modules: {},
});
