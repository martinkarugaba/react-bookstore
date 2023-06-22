import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';

const Booklist = () => {
  const { books } = useSelector((store) => store.books);

  return (
    <div>
      {Object.entries(books).map(([key, bookItems]) => bookItems.map((book) => (

        <SingleBook
          key={key}
          id={key}
          title={book.title}
          category={book.category}
        />
      )))}
    </div>
  );
};
export default Booklist;
