import { actionTypes, filters } from "./actionTypes";

export const inititalState = {
  filters: {
    sortBy: "",
    categories: {},
    rating: "",
    search: "",
    priceRange: 50,
  },
  productsData: [],
  cartProducts: [],
  wishlistProducts: [],
};

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        productsData: action.payload.products,
      };
    case "GET_CATAGORIES":
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: action.payload.categories.reduce(
            (acc, curr) => ({ ...acc, [curr.categoryName]: false }),
            {}
          ),
        },
      };
    case actionTypes.CHANGE_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filterType]: action.payload.filterValue,
        },
      };
    case actionTypes.CLEAR_FILTER:
      const maxValue = state.productsData.reduce(
        (acc, curr) => (Number(curr.price) > acc ? Number(curr.price) : acc),
        0
      );
      return {
        ...state,
        filters: {
          ...inititalState.filters,
          categories: Object.keys(state.filters.categories).reduce(
            (acc, curr) => ({ ...acc, [curr]: false }),
            {}
          ),
          [filters.PRICE_RANGE]: maxValue,
        },
      };
    case actionTypes.SET_CART:
      return {
        ...state,
        cartProducts: [...action.payload.cart],
      };
    case actionTypes.SET_WISHLIST:
      return {
        ...state,
        wishlistProducts: [...action.payload.wishlist],
      };
    case actionTypes.RESET:
      return {
        ...state,
        cartProducts: [],
        wishlistProducts: [],
      };
    case actionTypes.CART_RESET:
      return {
        ...state,
        cartProducts: action.payload,
      };
    default:
      return state;
  }
};
