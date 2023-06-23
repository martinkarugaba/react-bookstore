import PropTypes from 'prop-types';
import Circle from './Circle';
import FirstSection from './FirstSection';

const SingleBook = ({ id, title, category }) => (
  <section className="shadow flex justify-between items-center py-[1.75rem] pl-[1.688rem] pr-[9.188rem]">
    <FirstSection id={id} title={title} category={category} />
    {/* progress */}
    <div className="flex justify-between w-auto items-center border border-red-500">
      <Circle />
      <div>
        <h3>63%</h3>
        <p>Completed</p>
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
