import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArr: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
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
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksArr = state.booksArr.filter(
        (book) => book.id !== bookId,
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
