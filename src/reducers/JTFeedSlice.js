import { createSlice } from "@reduxjs/toolkit"

export default JTFeedSlice = createSlice({
    name:"feed",
    initialState:{
      totalItems:null,
      data:[],
      totalPages:null,
      currentPage:null,
    },
    reducers:{
        startFeedRequest(state,action){
            state.loading=true;
            state.error=null;
        },
        addFeedItems(state,action){
            state.data.push(action.payload);
            state.loading=true;
        },
        feedRequestFailure(state,action){
            state.error=action.payload;
            state.loading=false;
        }

    }
})

export const {startFeedRequest,addFeedItems,feedRequestFailure}=JTFeedSlice.actions