import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';

const AddBookButton = ({
  title, author, setTitle, setAuthor,
}) => {
  const dispatch = useDispatch();

  const book = {
    item_id: String(Date.now()),
    title,
    author,
    category: 'uncategorized',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    dispatch(fetchBooks());
    setTitle('');
    setAuthor('');
  };

  return (
    <button type="submit" onClick={handleSubmit}>
      Submit
    </button>
  );
};

AddBookButton.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setAuthor: PropTypes.func.isRequired,
};

export default AddBookButton;
