import PropTypes from 'prop-types';
import Circle from './Circle';
import FirstSection from './FirstSection';

const SingleBook = ({ id, title, category }) => (
  <section className="shadow flex justify-between items-center py-[1.75rem] pl-[1.688rem] pr-[5.188rem] mb-[0.938rem]">
    <FirstSection id={id} title={title} category={category} />
    <section className="flex justify-end items-center">
      {/* progress */}
      <div className="flex justify-between w-auto items-center pr-[2.938rem]">
        <Circle />
        <div className="flex flex-col justify-center items-start">
          <h3 className="font-montserat text-text-color text-[2rem] font-normal -mb-[0.7rem]">
            63%
          </h3>
          <p className="font-montserat text-sm text-gray-400 font-normal">
            Completed
          </p>
        </div>
      </div>
      {/* book info */}
      <div className="pl-[3.688rem] border-l">
        <h3 className="text-gray-400 uppercase text-small font-roboto-slab">
          Current Chapter
        </h3>
        <p className="text-text-color text-small font-light font-roboto-slab">
          Chapter 3: Lessons learned
        </p>
        <button
          type="button"
          className="uppercase mt-[1.438rem] text-sm rounded-sm text-white py-[0.438] px-[1.375rem] font-roboto-slab font-light bg-primary-blue"
        >
          update progress
        </button>
      </div>
    </section>
  </section>
);

export default SingleBook;

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
