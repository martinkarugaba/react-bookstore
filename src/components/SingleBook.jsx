import PropTypes from "prop-types";

const SingleBook = ({ title }) => {
  return (
    <div>
      <p>{title}</p>
      <button>delete</button>
    </div>
  );
};

export default SingleBook;

SingleBook.PropTypes = {
  title: PropTypes.string.isRequired,
};
