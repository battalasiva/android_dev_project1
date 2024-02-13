import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { useDispatch } from "react-redux"
import { addFeedItems, feedRequestFailure, startFeedRequest } from "../reducers/JTFeedSlice";
import { endpoints } from "./JTAPIs";

export const BASE_URL = 'https://www.kovela.app/customer/api/';
const endpoints = {
    FEED : '/jtfeed/list'
}

authAxiousInstance = axios.get({
    baseURL: BASE_URL,
    headers: {
      'Cconstontent-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
});

const JTFeedService = createAsyncThunk("getAccessToken", async(data) => {
    const dispatch = useDispatch();
    const name = data.name;
    const posts = data.posts;
    const images = data.images;
    // console.log(data);
    try {
        dispatch(startFeedRequest());
        let response = await authAxiousInstance.get(
            `${endpoints.FEED}`
        )
        dispatch(addFeedItems(response));

    } catch (error) {
        dispatch(feedRequestFailure(error.message))
        console.log(error);
    }

})

export default JTFeedService;