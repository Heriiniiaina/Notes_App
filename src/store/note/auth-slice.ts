import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {jwtDecode} from "jwt-decode"
interface User{
    userId:string,
    fullName:string,
    email:string
}
interface AuthState {
    user:User | null,
    token: string | null,
    isAuthenticiate:boolean
} 
const token = sessionStorage.getItem("user-token")
const initialState:AuthState = {
    user:null,
    token:token,
    isAuthenticiate:!!sessionStorage.getItem("user-token")
}
if(token){
    try {
        const decodedUSer:User = jwtDecode(token)
        initialState.user = decodedUSer
    } catch (error) {
        
    }
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action:PayloadAction<{user:User,token:string}>){
            console.log(action.payload.user)
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticiate = true
        }
    }
})


export const {login} = authSlice.actions
export const authReducer = authSlice.reducer
export default User

