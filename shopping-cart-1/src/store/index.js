import { createStore } from "vuex";
import productsList from "../data/productsList";

const addToCart = (cart, product) => {
  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", JSON.stringify([]));
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.push({ product: product, amount: 1 });

  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
    let productIndexInCart = GetProductIndexInCart(cart, product.id);

    if (productIndexInCart === -1) {
      cart.push({ product: product, amount: 1 });
    } else {
      cart[productIndexInCart].amount++;
    }
  }

  updateLocalStorageCart(cart);
  return cart;
};

const GetProductIndexInCart = (cart, productId) => {
  let productIndex = -1;
  let index = -1;

  if (cart === null || Object.keys(cart).length === 0) {
    return index;
  }

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
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeProductFromCart = (cart, productId) => {
  // delete cart.;
  cart.splice(GetProductIndexInCart(cart, productId), 1);
  updateLocalStorageCart(cart);
};

const productAmountInCartOutsideFunc = (cart, productId) => {
  if (GetProductIndexInCart(cart, productId) === -1) {
    return 0;
  }

  return cart[GetProductIndexInCart(cart, productId)].amount;
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
    productAmountInCart: (state) => (productId) => {
      if (GetProductIndexInCart(state.cart, productId) === -1) {
        return 0;
      }

      return state.cart[GetProductIndexInCart(state.cart, productId)].amount;
    },
    productIsInCart: (state, getters) => (productId) => {
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
    },
    DECREASE_AMOUNT_IN_CART(state, productId) {
      if (productAmountInCartOutsideFunc(state.cart, productId) === 1) {
        // this.commit("REMOVE_PRODUCT_FROM_CART", productId);
        removeProductFromCart(state.cart, productId);
      } else {
        state.cart[GetProductIndexInCart(state.cart, productId)].amount--;
        updateLocalStorageCart(state.cart);
      }
    },
    REMOVE_PRODUCT_FROM_CART(state, productId) {
      removeProductFromCart(state.cart, productId);
    },
  },
  actions: {},
  modules: {},
});
