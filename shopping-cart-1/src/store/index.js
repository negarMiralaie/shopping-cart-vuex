import { createStore } from "vuex";
import productsList from "../data/productsList";

// const updateLocalStorageCart = product => {
//   if (isLocalStorageSupported()) {
//     addProductToLocalStorageCart(product, 1);
//     // if (localStorage.getItem("cartProducts")) {
//     //   addProductToLocalStorageCart(product, 1)
//     // } else {
//     //   localStorage.setItem("cartProducts", {})
//     // }
//   } else {
//     console.log("local storage is not supported");
//   }
// };

// const addProductToLocalStorageCart = (
//   product,
//   amountOfProductsForAddingToCart
// ) => {
//   localStorage.setItem(
//     "cartProducts",
//     JSON.stringify({
//       product: product,
//       amountInCart: amountOfProductsForAddingToCart,
//     })
//   );
// };

// const isLocalStorageSupported = () => {
//   if (isLocalStorage()) {
//     return true;
//   }

//   return false;
// };

const addToCart = (cart, product) => {
  const productIndexInCart = GetProductIndexInCart(cart, product.id);

  if (productIndexInCart > -1) {
    console.log("already in cart");
    cart[productIndexInCart].amount++;
    console.log(JSON.parse(JSON.stringify(cart[productIndexInCart])));
  } else {
    console.log("not in cart");
    cart.push({ product: product, amount: 1 });
  }

  updateLocalStorageCart(cart);
};

const GetProductIndexInCart = (cart, productId) => {
  let productIndex = -1;

  cart.forEach((cartItem) => {
    if (cartItem.product.id === productId) {
      productIndex = 0;
      return false;
    }
  });
  return productIndex;
};

const updateLocalStorageCart = cart => {
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
      // state.cart.product = amount;
      // updateLocalStorageCart();
      // console.log(state.cart);
      addToCart(state.cart, product);
    },
  },
  actions: {},
  modules: {},
});
