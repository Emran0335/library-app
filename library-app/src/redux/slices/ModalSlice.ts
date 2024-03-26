import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalSliceState {
  displayLogin: boolean;
  displayLibraryCard: boolean;
}

const initialState: ModalSliceState = {
  displayLogin: false,
  displayLibraryCard: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setDisplayLogin: (state, action: PayloadAction<boolean>) => {
      state = {
        ...state,
        displayLogin: action.payload,
      };
      return state;
    },
    setDisplayLibraryCard: (state, action: PayloadAction<boolean>) => {
      state = {
        ...state,
        displayLibraryCard: action.payload,
      };
      return state;
    },
  },
});

export const { setDisplayLogin, setDisplayLibraryCard } = ModalSlice.actions;
export default ModalSlice.reducer;
