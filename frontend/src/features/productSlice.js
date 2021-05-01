import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	products: [],
	products_error: {},
	product: {},
	product_error: {},
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		GET_PRODUCTS_SUCCESS: (state, action) => {
			state.products = action.payload;
		},
		GET_PRODUCTS_FAIL: (state, action) => {
			state.products_error = action.payload;
		},
		GET_PRODUCT_DETAIL_SUCCESS: (state, action) => {
			state.product = action.payload;
		},
		GET_PRODUCT_DETAIL_FAIL: (state, action) => {
			state.product_error = action.payload;
		},
		GET_PRODUCT_DETAIL_RESET: (state) => {
			state.product = {};
		},
	},
});

export const {
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAIL,
	GET_PRODUCT_DETAIL_SUCCESS,
	GET_PRODUCT_DETAIL_FAIL,
	GET_PRODUCT_DETAIL_RESET,
} = productSlice.actions;
export const fetchProducts = () => async (dispatch) => {
	try {
		const { data } = await axios.get(`/api/products`);
		dispatch(GET_PRODUCTS_SUCCESS(data));
	} catch (error) {
		dispatch(
			GET_PRODUCTS_FAIL(
				error.response && error.reponse.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};
export const fetchProductDetails = (id) => async (dispatch) => {
	try {
		const { data } = await axios.get(`/api/products/${id}`);
		dispatch(GET_PRODUCT_DETAIL_SUCCESS(data));
	} catch (error) {
		dispatch(
			GET_PRODUCT_DETAIL_FAIL(
				error.response && error.reponse.data.message
					? error.response.data.message
					: error.message
			)
		);
	}
};
export const removeProductDetails = () => (dispatch) => {
	dispatch(GET_PRODUCT_DETAIL_RESET);
};
export default productSlice.reducer;
