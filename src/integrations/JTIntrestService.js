import { createAsyncThunk } from "@reduxjs/toolkit"
import { intrestError, intrestRequest, intrestSuccess } from "../reducers/JTIntrestSlice"
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const JTIntrestService = createAsyncThunk("getAccessToken",async()=>{
    const dispatch=useDispatch();
    try {

       
    } catch (error) {
        
    }
})

export default JTIntrestService;