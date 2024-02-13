import { createSlice } from "@reduxjs/toolkit"

export default JTIntrestSlice = createSlice({
    name:'intrest',
    initialState:{
        name:'name',
        userIntrests:[],
        suggestedInterstes:[],
        loading:false,
        error:false,
        success:false,
        errorMessage:'',
        isLoggedIn:false
    },
    reducers:{
        intrestRequest:(state,action)=>{
            state.loading=true;
            state.error=false;
        },
        intrestSuccess:(state,action)=>{
            // state.loading=false;
            // state.name=action.payload.name;
            // state.userIntrests=action.payload.userIntrests;
            // state.suggestedInterstes=action.payload.suggestedInterstes;
            // state.success=true;
            state.name = action.payload;
        },
        intrestError:(state,action)=>{
            state.error=true;
            state.errorMessage=action.payload;
        }
    }
})

export const {intrestRequest,intrestSuccess,intrestError}=JTIntrestSlice.actions