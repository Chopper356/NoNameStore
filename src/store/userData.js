import { createSlice } from "@reduxjs/toolkit"
// import instance from "../lib/AxiosInstance";
// import { ApiUrls } from "../constants";

// export const getUser = createAsyncThunk(
//   "users/fetchUser",
//   async function () {
//     return await instance.get(ApiUrls.profile.info);
//   }
// );

export const userData = createSlice({
  name: "user",
  initialState: {
    _id: "",
    name: "",
    email: ""
  },
  reducers: {
    setUser() {}
  },
  extraReducers: {},
})

export const { setUser } = userData.actions;

export default userData.reducer