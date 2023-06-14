import { useSelector } from 'react-redux';
import SingleBook from './SingleBook';

const Booklist = () => {
  const { booksArr } = useSelector((store) => store.books);

  return (
    <div>
      {booksArr.map((book) => {
        const { title, author } = book;
        return (
          <SingleBook
            key={book.id}
            title={title}
            author={author}
          />
        );
      })}
    </div>
  );
};
export default Booklist;
