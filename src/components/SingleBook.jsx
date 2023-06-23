import PropTypes from 'prop-types';
import RemoveBookButton from './DeleteBookButton';
import '../styles/singleBook.css';
import Circle from './Circle';

const SingleBook = ({ id, title, category }) => (
  <section className="shadow flex justify-between items-center">
    <div>
      <p>{title}</p>
      <p>{category}</p>
      <RemoveBookButton id={id} />
    </div>
    {/* progress */}
    <div>
      <Circle />
      <div>
        <h3>63%</h3>
        <p>COmpleted</p>
      </div>
    </div>
    {/* book info */}
    <div>
      <h3>Current Chapter</h3>
      <p>Chapter 3: Lessons learned</p>
      <button type="button">update progress</button>
    </div>
  </section>
);

export default SingleBook;

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
