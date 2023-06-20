import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = process.env.REACT_APP_BOOKSTORE_APP_ID;
const getBooksUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
const createBookUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
const deleteBookUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/item1`;

const initialState = {
  books: [],
  isLoading: true,
  isError: false,
};

const postBook = async (book) => {
  try {
    const response = await axios.post(createBookUrl, book, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(getBooksUrl);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookToList: (state, action) => {
      postBook(action.payload);
    },
    removeBookFromList: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter(
        (book) => book.itemId !== bookId,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { addBookToList, removeBookFromList } = booksSlice.actions;
export default booksSlice.reducer;
