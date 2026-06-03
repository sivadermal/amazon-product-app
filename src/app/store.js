import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../redux/productSlice";
import filterReducer from "../redux/filterSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        filters: filterReducer
    }
});