import PropTypes from 'prop-types';
import RemoveBookButton from './DeleteBookButton';

const SingleBook = ({ id, title, category }) => (
  <div>
    <p>{title}</p>
    <p>{category}</p>
    <RemoveBookButton id={id} />
  </div>
);

export default SingleBook;

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
