import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    siteMapvisibility: false,
  },
  reducers: {
    setSiteMapVisibility(state) {
      state.siteMapvisibility = !state.siteMapvisibility;
    },
  },
});

export default modalSlice.reducer;
export const { setSiteMapVisibility } = modalSlice.actions;
