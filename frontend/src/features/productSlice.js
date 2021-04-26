import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		GET_PRODUCTS_SUCCESS: () => {},
		GET_PRODUCTS_FAIL: () => {},
		GET_PRODUCT_DETAIL_SUCCESS: () => {},
		GET_PRODUCT_DETAIL_FAIL: () => {},
	},
});

export const {
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAIL,
	GET_PRODUCT_DETAIL_SUCCESS,
	GET_PRODUCT_DETAIL_FAIL,
} = productSlice.actions;
export const fetchProducts = async (dispatch) => {
	try {
		/*const resp = await API.getstuff();
        dispatch(GET_PRODUCTS_SUCCESS(resp))*/
	} catch (error) {
		dispatch(GET_PRODUCTS_FAIL);
	}
};
export default productSlice.reducer;
