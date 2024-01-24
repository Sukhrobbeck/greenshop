import { createSlice } from "@reduxjs/toolkit";

interface Payload {
  payload: string;
}

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    siteMapvisibility: false,
    authModal: false,
    googleVerification: false,
    activeSignInMethod: "signIn",
    googleAuthVisibility: false,
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
    setActiveSignInMethod(state: any, payload: { payload: Payload }) {
      state.activeSignInMethod = payload.payload.payload;
    },
    setGoogleAuthVisibility(state, { payload }) {
      state.googleAuthVisibility = !state.googleAuthVisibility;
    },
  },
});

export default modalSlice.reducer;
export const {
  setSiteMapVisibility,
  setAuthModal,
  setGoogleVerification,
  setActiveSignInMethod,
  setGoogleAuthVisibility,
} = modalSlice.actions;
