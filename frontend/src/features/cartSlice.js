import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	cartItems: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		ADD_TO_CART: (state, action) => {
			const item = action.payload;
			const existItem = state.cartItems.find((x) => x.product === item.product);
			if (existItem) {
				state.cartItems.map((x) =>
					x.product === existItem.product ? item : x
				);
			} else {
				state.cartItems.push(action.payload);
			}
		},
		REMOVE_FROM_CART: (state, action) => {
			state.cartItems.filter((x) => x.product !== action.payload);
		},

		CART_RESET: (state) => {
			state.cartItems = [];
		},
	},
});

export const { ADD_TO_CART, REMOVE_FROM_CART, CART_RESET } = cartSlice.actions;

export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`);

	const item = {
		product: data._id,
		name: data.name,
		imageUrl: data.imageUrl,
		price: data.price,
		countInStock: data.countInStock,
		qty: qty,
	};
	dispatch(ADD_TO_CART(item));
	localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch(REMOVE_FROM_CART(id));
	localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
export default cartSlice.reducer;
