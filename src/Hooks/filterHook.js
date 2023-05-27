import { useData } from "../context/DataContext";
import { priceRangeFilter, ratingFilter, sortByPrice, categoryFilter,searchFilter } from "../utils/utils";

export const useFilterHook =()=>{
    const {state}= useData();
    const {filters,productsData} = state;
    const applyFilters =(productsData, filters)=>{
        const {sortBy,rating, priceRange,categories, search} = filters;
        let newData = [...productsData];
        
        newData = categoryFilter(newData, categories);
        newData = sortByPrice(newData,sortBy);
        newData = ratingFilter(newData, rating);
        newData = priceRangeFilter(newData, priceRange);
        newData = searchFilter(newData, search)
    
       return newData;
    }

    const newData = applyFilters(productsData, filters);
    console.log(newData , "search functionality");
    return{filteredData: newData}

}