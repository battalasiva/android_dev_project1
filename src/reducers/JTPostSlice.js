import { createSlice } from "@reduxjs/toolkit"

export default JTPostSlice = createSlice({
    name:'post',
    initialState:{
        name:'username',
        category:'actor',
        likes:null,
        comments:[],
        image:[],
        loading:false,
        error:false,
        success:false,
        errorMessage:'',
        isLoggedIn:false
    },
    reducers:{
        postRequest:(state,action)=>{
            state.loading=true;
            state.isLoggedIn=true;
        },
        postSuccess:(state,action)=>{
            state.loading=false;
            state.isLoggedIn=true;
            state.name=action.payload.name;
            state.iamge=action.payload.image;
            state.category=action.payload.category;
            state.success=true;
        },
        postError:(state,action)=>{
            state.error=true;
            state.errorMessage=action.payload;
        }
    }
})

export const {postRequest,postError,postSuccess} = JTPostSlice.actions