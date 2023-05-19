import axios from "axios";

export const loginService = async(email, password) => {
	return await axios.post("/api/auth/login", {
		email,
		password,
	});
};
 
 export const signUpService = async(firstName, lastName, email, password) =>{
  return await axios.post("/api/auth/signup", {
    firstName,
    lastName,
    email,
    password
 })
 }
 


export const getAllProducts = async()=> axios.get('/api/products');

export const getAllCategories = async()=> axios.get('/api/categories');