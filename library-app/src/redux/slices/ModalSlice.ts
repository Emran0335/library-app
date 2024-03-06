import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalSliceState {
  displayLogin: boolean;
}

const initialState: ModalSliceState = {
  displayLogin: false,
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
  },
});

export const { setDisplayLogin } = ModalSlice.actions;
export default ModalSlice.reducer;
