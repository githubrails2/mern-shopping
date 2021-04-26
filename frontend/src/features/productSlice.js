import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		GET_PRODUCTS_SUCCESS: () => {},
		GET_PRODUCTS_FAIL: () => {},
	},
});

export const { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL } = productSlice.actions;
export default productSlice.reducer;
