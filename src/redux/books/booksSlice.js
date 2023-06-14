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
        id, title, author, category,
      } = action.payload;
      const book = {
        id,
        title,
        author,
        category,
      };
      state.booksArr.push(book);
    },
    removeBookFromList: (state, action) => {
      const bookId = action.payload;
      state.booksArr = state.booksArr.filter(
        (book) => book.id !== bookId,
      );
    },
  },
});

export const { addBookToList, removeBookFromList } = booksSlice.actions;
export default booksSlice.reducer;
