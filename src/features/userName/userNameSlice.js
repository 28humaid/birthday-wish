import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userName:'',
}

export const userNameSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        enteredUserName:(state,action)=>{
            state.userName = action.payload
            console.log('cxzxxcxcxvvvcvcxxx:',state.userName);   
        }
    }
})

export const {enteredUserName} = userNameSlice.actions
export default userNameSlice.reducer