import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBookFromList } from "../redux/books/booksSlice";

const RemoveBookButton = (id) => {
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
export default RemoveBookButton;

RemoveBookButton.propTypes = {
  id: PropTypes.string.isRequired,
};
