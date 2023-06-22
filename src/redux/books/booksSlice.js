import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = process.env.REACT_APP_BOOKSTORE_APP_ID;
const getBooksUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
const createBookUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

const initialState = {
  books: [],
  isLoading: true,
  isError: false,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const response = await axios.get(getBooksUrl);
    return response.data;
  },
);

export const createBook = createAsyncThunk(
  'books/createBook', async (book, thunkAPI) => {
    try {
      const response = await axios.post(createBookUrl, book, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        thunkAPI.dispatch(fetchBooks());
        return null;
      }
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook', async (id, thunkAPI) => {
    const deleteBookUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${id}`;
    try {
      const response = await axios.delete(deleteBookUrl);
      if (response.status === 201) {
        thunkAPI.dispatch(fetchBooks());
        return null;
      }
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      createBook(action.payload);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      deleteBook(bookId);
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

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
