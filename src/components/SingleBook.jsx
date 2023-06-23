import PropTypes from 'prop-types';
import RemoveBookButton from './DeleteBookButton';
import '../styles/singleBook.css';

const SingleBook = ({ id, title, category }) => (
  <section className="shadow flex justify-between items-center">
    <div>
      <p>{title}</p>
      <p>{category}</p>
      <RemoveBookButton id={id} />
    </div>

    <div className="box border relative w-[300px] h-[400px] flex justify-center items-center">
      <div className="percent w-[150px] h-[150px] relative">
        <svg className="w-[150px] h-[150px] relative">
          <circle
            className="w-[150px] h-[150px] fill-none stroke-[10] stroke-primary-blue translate-y-[5px] translate-x-[5px]"
            cx="70"
            cy="70"
            r="70"
          />
          <circle
            className="w-[150px] h-[150px] fill-none stroke-[10] stroke-primary-blue translate-y-[5px] translate-x-[5px]"
            cx="70"
            cy="70"
            r="70"
          />
        </svg>
        <div className="number">
          <h2>
            87
            <span>%</span>
          </h2>
        </div>
      </div>
    </div>

    <div>
      <h3>Content</h3>
    </div>
  </section>
);

export default SingleBook;

SingleBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
