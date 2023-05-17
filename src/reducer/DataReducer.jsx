import { actionTypes, filters } from "./actionTypes";

export const inititalState={
    filters:{
        sortBy: '',
        categories:{},
        rating: '',
        search: '',
        priceRange: 50
    },
    productsData: []
}

console.log(inititalState.filters)
export const dataReducer =(state, action)=>{
    console.log(state)
    switch(action.type){
        case "GET_DATA":
            return {
                ...state,
                productsData: action.payload.products
            }
        case "GET_CATAGORIES":
            return{
                ...state,
                filters: {
                    ...state.filters,
                    categories: action.payload.categories.reduce(
                        (acc,curr)=>({...acc ,[curr.categoryName]:false}),{}
                    )
                }
            }
        case actionTypes.CHANGE_FILTER:
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [action.payload.filterType] : action.payload.filterValue
                }
            }
        case actionTypes.CLEAR_FILTER:
            const maxValue = state.productsData.reduce(
                (acc,curr)=> (Number(curr.price) > acc ? Number(curr.price) : acc), 0
            )
            return{
                ...state,
                filters:{
                    ...inititalState.filters,
                    categories: Object.keys(state.filters.categories).reduce(
                        (acc,curr)=> ({...acc, [curr]: false}), {}
                    ),
                    [filters.PRICE_RANGE ]: maxValue
                }
            }
            default:
                return state;
    }
  

}