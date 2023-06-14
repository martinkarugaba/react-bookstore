import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromList } from '../redux/books/booksSlice';

const RemoveBookButton = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(removeBookFromList(id))}
    >
      delete
    </button>
  );
};

RemoveBookButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveBookButton;
