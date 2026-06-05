import axios from "axios";



export const getProducts = () => {
    return axios.get("https://dummyjson.com/products");
};

export const getCategories = () => {
    return axios.get(
  "https://dummyjson.com/products/categories"
)
    
};

export const getProductById = (id) => {
    return axios.get(`https://dummyjson.com/products/${id}`);
};
