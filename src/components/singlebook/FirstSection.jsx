import PropTypes from 'prop-types';
import DeleteBook from './DeleteBook';

const FirstSection = ({ category, title, id }) => (
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
      <DeleteBook id={id} />
      <button type="button" className="pl-[1.063] border-l">
        Edit
      </button>
    </div>
  </div>
);
export default FirstSection;

FirstSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
