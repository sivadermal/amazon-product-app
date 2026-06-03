import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filters",

    initialState: {
        category: "",
        brand: "",
        minPrice: "",
        maxPrice: "",
        currentPage: 1
    },

    reducers: {

        setCategory: (state, action) => {
            state.category = action.payload;
            state.currentPage = 1;
        },

        setBrand: (state, action) => {
            state.brand = action.payload;
            state.currentPage = 1;
        },

        setMinPrice: (state, action) => {
            state.minPrice = action.payload;
            state.currentPage = 1;
        },

        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
            state.currentPage = 1;
        },

        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },

        clearFilters: (state) => {
            state.category = "";
            state.brand = "";
            state.minPrice = "";
            state.maxPrice = "";
            state.currentPage = 1;
        }
    }
});

export const {
    setCategory,
    setBrand,
    setMinPrice,
    setMaxPrice,
    setCurrentPage,
    clearFilters
} = filterSlice.actions;

export default filterSlice.reducer;