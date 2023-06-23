import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook, fetchBooks } from '../redux/books/booksSlice';

const DeleteBookButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(id));
    dispatch(fetchBooks());
  };

  return (
    <button
      type="button"
      className="pl-[1.063rem] pr-[0.938rem]"
      onClick={handleDelete}
    >
      Remove
    </button>
  );
};

DeleteBookButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteBookButton;
