import {  sortBy } from "../reducer/actionTypes";

const getCategoryData = (...arr)=>{
    console.log(arr);
    const categoryData = arr.reduce((acc,curr)=>{
        console.log(acc);
        console.log(curr)
        return acc.concat(curr.filter((ele)=> !acc.some((item)=> item._id===ele._id )))
    },[])
    console.log(categoryData);
    return categoryData;
}

const categoryFilter =(data,categories)=>{
    let newData = [];
    let flag = false;
    for(const category in categories){
        if(categories[category]){
            flag = true;
            newData = getCategoryData(newData, data.filter((elem)=> elem.category === category))
        }
    }
    if(flag) return newData;
    return data;
}

 const sortByPrice = (data, sortValue)=>{
    switch(sortValue){
        case sortBy.HIGH_TO_LOW :
            return [...data].sort((a,b)=> b.price - a.price);
        case sortBy.LOW_TO_HIGH :
            return [...data].sort((a,b)=> a.price - b.price);
        default:
            return data;
    } 
}

 const ratingFilter =(data, ratingValue)=>{
 if(ratingValue === '') return data;
 const rate = Number(ratingValue);
 return data.filter((ele)=>Number(ele.ratings) >= rate)
 }

 const priceRangeFilter =(data, maxValue)=>{
  return data.filter((ele)=> Number(ele.price) <= maxValue)
 }

 export {sortByPrice,ratingFilter,priceRangeFilter, categoryFilter}
