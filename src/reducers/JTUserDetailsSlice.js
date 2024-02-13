import { createSlice } from "@reduxjs/toolkit"

export const JTUserDetailsSlice = createSlice({
    name:"userDetails",
    initialState:{
        id:null,
        email:null,
        firstName:null,
        lastName:null,
        primaryContact:null,
        loading:false,
        roles:[],
        error:null,
        profilePicture:"https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png",
    },
    reducers:{
        setUserDetails(state,action){
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.primaryContact = action.payload.primaryContact;
            state.roles = action.payload.roles;
            state.loading = false

        },
        profileFailure(state,action){
            state.error = action.payload
        },
        setProfilePicture(state,action){
            state.profilePicture = action.payload
        }
    }
})

export const {setUserDetails,profileFailure,setProfilePicture} = JTUserDetailsSlice.actions;