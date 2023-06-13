import { createSlice } from "@reduxjs/toolkit";
import books from "../../data/books";

const initialState = {
  booksArr: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: () => {},
    removeBook: () => {},
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
