import axios from "axios";

export const getAllProducts = async()=> axios.get('/api/products');

export const getAllCategories = async()=> axios.get('/api/categories')