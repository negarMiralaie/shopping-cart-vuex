import { createStore } from "vuex";
import productsList from "../data/productsList";

const addToCart = (cart, product) => {
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.push({ product: product, amount: 1 });
    updateLocalStorageCart(cart);
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
    let productIndexInCart = GetProductIndexInCart(cart, product.id);
    if (productIndexInCart === -1) {
      cart.push({ product: product, amount: 1 });
      updateLocalStorageCart(cart);
    } else {
      cart[productIndexInCart].amount++;
      updateLocalStorageCart(cart);
    }
  }

  return cart;
};

const GetProductIndexInCart = (cart, productId) => {
  let productIndex = -1;
  let index = -1;

  if (cart===null || Object.keys(cart).length === 0) {
    return index;
  }

  cart.forEach((cartItem) => {
    index++;
    if (cartItem.product.id === productId) {
      productIndex = index;
      return false;
    }
  });
  // console.log("productIndex:", productIndex);
  return productIndex;
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
    cartLength: (state) => {
      if (localStorage.getItem("cart") === null) {
        return 0;
      }
      return Object.keys(state.cart).length;
    },
    // getProductInfoInCart: (state) => (productId) => {
    //   console.log(GetProductIndexInCart(state.cart, productId));
    //   return GetProductIndexInCart(state.cart, productId);
    // },
    productAmountInCart: (state) => (productId) => {
      if (GetProductIndexInCart(state.cart, productId) === -1) {
        return 0;
      }

      return state.cart[GetProductIndexInCart(state.cart, productId)].amount;
    },
    productIsInCart: (state, getters) => (productId) => {
      console.log("productId:", productId)
      if (getters.productAmountInCart(productId) !== 0) {
        return true;
      }
      return false;
    },
  },
  mutations: {
    CHANGE_IS_SHOW_PRODUCT_DETAILS(state) {
      state.isShowProductDetails = !state.isShowProductDetails;
    },
    ADD_TO_CART(state, product) {
      state.cart = addToCart(state.cart, product);
    },
    SYNC_CART_WITH_LOCAL_STORAGE(state) {
      state.cart = JSON.parse(localStorage.getItem("cart"));
    }
  },
  actions: {},
  modules: {},
});
