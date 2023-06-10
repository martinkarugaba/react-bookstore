import { useState } from 'react';
import books from '../data/books';
import SingleBook from './SingleBook';

const Booklist = () => {
  const [booklist, setBookList] = useState(books);

  return (
    <div>
      {booklist.map((book) => {
        const { title, author } = book;
        return (
          <SingleBook
            key={book.id}
            setBookList={setBookList}
            title={title}
            author={author}
          />
        );
      })}
    </div>
  );
};
export default Booklist;
