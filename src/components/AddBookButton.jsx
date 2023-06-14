import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBookToList } from '../redux/books/booksSlice';

const AddBookButton = ({
  title, author, setTitle, setAuthor,
}) => {
  const dispatch = useDispatch();

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
