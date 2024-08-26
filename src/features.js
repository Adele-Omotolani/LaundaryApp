import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "userDatas",
  initialState: {
    userdata: [],
    token: "",
  },
  reducers: {
    setUserdata: (state, action) => {
      state.userdata = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
    
  },
});

export const { setUserdata, setToken, clearToken } = Slice.actions;
export default Slice.reducer;
