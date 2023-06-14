import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToList } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      itemId: String(Date.now()),
      title,
      author,
      category: 'uncategorized',
    };
    dispatch(addBookToList(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddBookForm;
