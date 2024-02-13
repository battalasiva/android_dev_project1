import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { saveLoginSessionDetails } from "../utils/LocalStorage";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess, setUserDataOnLogin } from "../reducers/JTLoginSlice";

export const BASE_URL = "https://fanfun.in/customer/api/"
// 'https://fanfun.in/customer/api/';
//https://www.kovela.app/customer/api/
const endpoints = {
  NEW_SIGN_IN: 'auth/signin'
}
const authAxiousInstance = axios.create({
     baseURL: BASE_URL,
     headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*'
     },
});

const JTLoginService = createAsyncThunk("getAccessToken", async(data , {dispatch}) =>{

    const email= data.email;
    const password = data.password;
    const credentials = {
      email : email,
      password : password
    }
    try{
      dispatch(loginStart())
      let response = await authAxiousInstance.post(
        `${endpoints.NEW_SIGN_IN}`,
        credentials
      );

      saveLoginSessionDetails(response.data.tokenType, response.data.accessToken);
      dispatch(setUserDataOnLogin(response.data.accessToken))
    } catch(error){
      dispatch(loginFailure(error.message))
      console.log(error.message);
    }
});

export default JTLoginService;

