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
    console.error(error);
    return error;
  }
};

export const deleteBookFromAPI = async (id) => {
  const deleteBookUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${id}`;
  try {
    const response = await axios.delete(deleteBookUrl);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      postBook(action.payload);
    },
    deleteBook: (state, action) => {
      const bookId = action.payload;
      deleteBookFromAPI(bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        console.log('pending');
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.books = action.payload;
        console.log('fulfilled');
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        console.log('rejected');
      });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
