import PropTypes from 'prop-types';

const SingleBook = ({ title }) => (
  <div>
    <p>{title}</p>
    <button type="button">delete</button>
  </div>
);

export default SingleBook;

SingleBook.propTypes = {
  title: PropTypes.string.isRequired,
};
