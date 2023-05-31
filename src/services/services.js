import axios from "axios";

export const loginService = (email, password) => {
  console.log(email);
  console.log(password);
  const res = axios.post("/api/auth/login", {
		email,
		password,
   
	});
  console.log(res);
  return res;
 };
 
 export const signUpService = (firstName, lastName, email, password) =>{
  return  axios.post("/api/auth/signup", {
    firstName,
    lastName,
    email,
    password
 })
 }
 
export const getAllProducts = ()=> axios.get('/api/products');

export const getAllCategories = ()=> axios.get('/api/categories');

export const addToCartService = (product, token)=>{
  return  axios.post("/api/user/cart", 
                {product},
                {headers: {authorization: token}}
                )
}

