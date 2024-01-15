import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    siteMapvisibility: false,
    authModal: false,
  },
  reducers: {
    setSiteMapVisibility(state) {
      state.siteMapvisibility = !state.siteMapvisibility;
    },
    setAuthModal(state) {
      state.authModal = !state.authModal;
    },
  },
});

export default modalSlice.reducer;
export const { setSiteMapVisibility, setAuthModal } = modalSlice.actions;
