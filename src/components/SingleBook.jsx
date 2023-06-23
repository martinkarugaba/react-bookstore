import PropTypes from 'prop-types';
import RemoveBookButton from './DeleteBookButton';
import Circle from './Circle';

const SingleBook = ({ id, title, category }) => (
  <section className="shadow flex justify-between items-center py-[1.75rem] pl-[1.688rem] pr-[9.188rem]">
    <div>
      <p className="text-gray-400 font-montserat font-bold text-[0.875rem]">
        {category}
      </p>
      <p className="text-[1.375rem] font-roboto-slab font-bold text-text-color">
        {title}
      </p>
      <p className="font-roboto-slab font-light text-sm text-light-blue">
        Suzzane Collins
      </p>
      <div className="mt-[1.313rem] flex justify-start items-center font-roboto-slab font-light text-sm text-light-blue">
        <button type="button" className="pr-[0.938rem] border-r">
          Comments
        </button>
        <RemoveBookButton id={id} />
        <button type="button" className="pl-[1.063] border-l">
          Edit
        </button>
      </div>
    </div>
    {/* progress */}
    <div className="flex justify-center items-center border ">
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
