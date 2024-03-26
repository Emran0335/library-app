import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { Book } from "../../models/Book";
import { PageInfo } from "../../models/Page";

interface BookSliceState {
  loading: boolean;
  error: boolean;
  books: Book[];
  currentBook: Book | undefined;
  pagingInformation: PageInfo | null;
}

const initialState: BookSliceState = {
  loading: true,
  error: false,
  books: [],
  currentBook: undefined,
  pagingInformation: null,
};

export const fetchAllBooks = createAsyncThunk(
  "book/all",
  async (payload, thunkAPI) => {
    try {
      const req = await axios.get("http://localhost:5000/book/");
      console.log(req.data);
      return req.data.books;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const BookSlice = createSlice({
  name: "book",
  initialState,

  reducers: {
    setCurrentBook(state, action: PayloadAction<Book | undefined>) {
      state = {
        ...state,
        currentBook: action.payload,
      };
      return state;
    },
  },

  extraReducers: (builder) => {
    // pending
    builder.addCase(fetchAllBooks.pending, (state) => {
      state = {
        ...state,
        books: [],
        loading: true,
      };
      return state;
    });
    // resolved or successed
    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
      state = {
        ...state,
        books: action.payload,
        loading: false,
      };
      return state;
    });
    // rejected
    builder.addCase(fetchAllBooks.rejected, (state) => {
      state = {
        ...state,
        loading: false,
        error: true,
      };
      return state;
    });
  },
});

export const { setCurrentBook } = BookSlice.actions;
export default BookSlice.reducer;
