import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToList } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [title, setBook] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      id: Date.now(),
      title,
      author,
      category: 'uncategorized',
    };
    dispatch(addBookToList(book));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Add book"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddBookForm;
