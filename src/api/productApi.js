import axios from "axios";



export const getProducts = () => {
    return axios.get(
  `${process.env.REACT_APP_API_URL}/products`
)
};

export const getCategories = () => {
    return axios.get(
  `${process.env.REACT_APP_API_URL}/products/categories`
)
    
};

export const getProductById = (id) => {
    return axios.get(
  `${process.env.REACT_APP_API_URL}/products/${id}`
    )
};
