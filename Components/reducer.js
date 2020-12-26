const initialState = []

export const Reducer = (state=initialState  , action)=>{
    if(action.type == "add"){
        return action.payload
    }
    return state
}




