import {  createSlice } from "@reduxjs/toolkit";

export const JTLoginSlice = createSlice({
    name: 'login',
    initialState: {
       user : null,
       authToken : null,
       isAuthenticated :false,
       loading : false,
       error : null,
    },
    reducers :{
        loginStart(state){
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action){
            state.loading =  false;
            state.isAuthenticated =  true;
            state.authToken =  action.payload;
        },
        setAuthToken(state, action){
            state.authToken =  action.payload;
        },
        loginFailure(state, action){
            state.loading = false;
            state.error = action.payload;
        },  
        setUserDataOnLogin(state , action){
            state.user = action.payload
        }
    }
   
}); 

export const {loginStart, loginSuccess,loginFailure ,setAuthToken ,setUserDataOnLogin } =  JTLoginSlice.actions