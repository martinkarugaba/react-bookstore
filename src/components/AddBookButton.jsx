import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/booksSlice';

const AddBookButton = ({
  title,
  author,
  setTitle,
  setAuthor,
  category,
  setCategory,
}) => {
  const dispatch = useDispatch();

  const book = {
    item_id: String(Date.now()),
    title,
    author,
    category,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBook(book));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <button type="submit" className="text-sm rounded-sm font-bold text-white bg-primary-blue py-2 px-8 font-roboto-slab uppercase" onClick={handleSubmit}>
      add book
    </button>
  );
};

AddBookButton.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setAuthor: PropTypes.func.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default AddBookButton;
