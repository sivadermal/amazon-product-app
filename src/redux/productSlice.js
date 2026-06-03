import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getProducts,
    getCategories,
    getProductById
} from "../api/productApi";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const response = await getProducts();
        return response.data.products;
    }
);

export const fetchCategories =
  createAsyncThunk(
    "products/fetchCategories",
    async () => {
      const response =
        await getCategories();

      return response.data.map(
        (item) => item.slug
      );
    }
  );

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id) => {
        const response = await getProductById(id);
        return response.data;
    }
);

const productSlice = createSlice({
    name: "products",

    initialState: {
        products: [],
        categories: [],
        selectedProduct: null,
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
            });

        builder
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.selectedProduct = action.payload;
            });
    }
});

export default productSlice.reducer;