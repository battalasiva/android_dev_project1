import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { getLogionSessionDetails } from "../utils/LocalStorage";
import { setProfilePicture } from "../reducers/JTUserDetailsSlice";

export const BASE_URL = "https://fanfun.in/customer/api/"

export const PROFILE_URL = " https://fanfun.in/media/"

const endpoints = {
  NEW_SIGN_IN: 'auth/signin',
  NEW_PROFILE_PICTURE :"picture/customer"
}
const authAxiousInstance = axios.create({
     baseURL: PROFILE_URL,
     headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': '*'
     },
});

const JTUserProfileService = createAsyncThunk("updateProfilePicture", async(data , {dispatch}) =>{
    const profilePicture = data;
    const authenticationToken = await getLogionSessionDetails();
    try{
      let response = await authAxiousInstance.post(
        `${endpoints.NEW_PROFILE_PICTURE}`,
        profilePicture , 
        {
            headers: {
              Authorization: authenticationToken.authToken,
            },
          }
      );
      dispatch(setProfilePicture(response.url));
       
    } catch(error){
      console.log(error,"erorrrrrrrrrr");
    }
});

export default JTUserProfileService;

