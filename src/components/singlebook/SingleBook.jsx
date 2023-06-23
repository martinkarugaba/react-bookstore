import PropTypes from 'prop-types';
import FirstSection from './FirstSection';
import OtherSection from './OtherSection';

const SingleBook = ({ id, title, category }) => (
  <section className="shadow flex justify-between items-center py-[1.75rem] pl-[1.688rem] pr-[5.188rem] mb-[0.938rem]">
    <FirstSection id={id} title={title} category={category} />
    <OtherSection />
  </section>
);

export default SingleBook;

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
