import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    siteMapvisibility: false,
    authModal: false,
    googleVerification: false,
  },
  reducers: {
    setSiteMapVisibility(state) {
      state.siteMapvisibility = !state.siteMapvisibility;
    },
    setAuthModal(state) {
      state.authModal = !state.authModal;
    },
    setGoogleVerification(state) {
      state.googleVerification = !state.googleVerification;
    },
  },
});

export default modalSlice.reducer;
export const { setSiteMapVisibility, setAuthModal, setGoogleVerification } =
  modalSlice.actions;
