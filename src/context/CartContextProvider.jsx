import React, { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helper/function";

const initialState = {
  selectedItem: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumProducts(state.selectedItem),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItem: [...newSelectedItem],
        ...sumProducts(newSelectedItem),
      };
    case "INCREASE":
      const increaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[increaseIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItem),
      };
    case "DECREASE":
      const decreaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItem),
      };
    case "CHECKOUT":
      return {
        selectedItem: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_FAVORITES": // اضافه کردن case برای حذف از لیست علاقه‌مندی‌ها
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };
    default:
      throw new Error("invalid Action!");
  }
};

const CartContext = createContext();

function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartContextProvider;
export { useCart };
