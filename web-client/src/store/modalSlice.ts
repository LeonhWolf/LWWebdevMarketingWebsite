import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isContactModalOpen: boolean;
}

const initialState: ModalState = {
  isContactModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state) => {
      state.isContactModalOpen = true;
    },
    close: (state) => {
      state.isContactModalOpen = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
