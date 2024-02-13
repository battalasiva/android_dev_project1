import { configureStore } from "@reduxjs/toolkit";
import { JTLoginSlice } from "../reducers/JTLoginSlice";
import { JTUserDetailsSlice } from "../reducers/JTUserDetailsSlice";
import JTFeedSlice from "../reducers/JTFeedSlice";
import JTPostSlice from "../reducers/JTPostSlice";
import JTIntrestSlice from "../reducers/JTIntrestSlice";

const JTStore = configureStore({
    reducer: {
        loginDetails: JTLoginSlice.reducer,
        userDetails : JTUserDetailsSlice.reducer,
        feedDetails : JTFeedSlice.reducer,
        postDetails : JTPostSlice.reducer,
        intrestDetails:JTIntrestSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck:false})
});

export default JTStore;