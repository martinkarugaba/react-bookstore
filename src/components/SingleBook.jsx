import PropTypes from "prop-types";
import RemoveBookButton from "./RemoveBookButton";

const SingleBook = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <RemoveBookButton id={id} />
    </div>
  );
};

export default SingleBook;

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
