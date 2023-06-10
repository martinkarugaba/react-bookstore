import { useState } from 'react';
import books from '../data/books';
import SingleBook from './SingleBook';

const Booklist = () => {
  const [booklist, setBookList] = useState(books);

  return (
    <div>
      {booklist.map((book) => <SingleBook key={book.id} setBookList={setBookList} book={book} />)}
    </div>
  );
};
export default Booklist;
