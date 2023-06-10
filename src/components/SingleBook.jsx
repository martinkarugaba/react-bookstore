import PropTypes from 'prop-types';

const SingleBook = ({ title, author }) => (
  <div>
    <p>{title}</p>
    <p>{author}</p>
    <button type="button">delete</button>
  </div>
);

export default SingleBook;

SingleBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
