import { ADD_NOTE,REMOVE_NOTE } from "./action.type";

const reducer = (state,action)=>{
    switch(action.type){
        case ADD_NOTE:
            console.log(state)
            return [...state,action.payload]
            
        case REMOVE_NOTE:
            break
    }
}
export default reducer