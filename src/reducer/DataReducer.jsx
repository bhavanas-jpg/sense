export const dataReducer =(state, action)=>{
    switch(action.type){
        case "GET_DATA":
            return {
                ...state,
                productsData: action.payload
            }
            default:
                return state;
    }

}