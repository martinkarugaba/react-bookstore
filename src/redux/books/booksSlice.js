import { createSlice } from '@reduxjs/toolkit';
import bookList from '../../data/books';

const initialState = {
  booksArr: bookList,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookToList: (state, action) => {
      const {
        itemId, title, author, category,
      } = action.payload;
      const book = {
        itemId,
        title,
        author,
        category,
      };
      state.booksArr.push(book);
    },
    removeBookFromList: (state, action) => {
      const bookId = action.payload;
      state.booksArr = state.booksArr.filter(
        (book) => book.itemId !== bookId,
      );
    },
  },
});

export const { addBookToList, removeBookFromList } = booksSlice.actions;
export default booksSlice.reducer;
