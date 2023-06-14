import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromList } from '../redux/books/booksSlice';

const SingleBook = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <button
        type="button"
        onClick={() => dispatch(removeBookFromList(id))}
      >
        delete
      </button>
    </div>
  );
};

export default SingleBook;

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
