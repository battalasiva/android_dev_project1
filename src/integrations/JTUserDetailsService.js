import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthTokenDetails } from "../utils/LocalStorage";
import axios from 'axios';
import { profileFailure, setUserDetails } from "../reducers/JTUserDetailsSlice";
export const BASE_URL = 'https://kovela.app/customer/api/';

const endpoints = {
    CURRENT_CUSTOMER: 'auth/currentCustomer'
}

const authAxiousInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    },
});

authAxiousInstance.interceptors.request.use(async function (config) {
    let token = await getAuthTokenDetails();
    // console.log('Sending req with this token', token);
    config.headers.Authorization = token;
    return config;
  });

const JTUserDetailsService = createAsyncThunk("getCurrentCustomer", async({dispatch}) =>{
    try{
      let response = await authAxiousInstance.get(
        `${endpoints.CURRENT_CUSTOMER}`
      );
      console.log("customer data",response.data);
      dispatch(setUserDetails(response.data))
      console.log("customer data",response.data);
      return response.data;
    } catch(error){
      console.log(error);
      dispatch(profileFailure(error.message));
    }
});

export default JTUserDetailsService;

