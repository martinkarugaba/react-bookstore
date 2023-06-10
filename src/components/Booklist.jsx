import { useState } from "react";
import books from "../data/books";
import SingleBook from "./SingleBook";

const Booklist = () => {
  const [booklist, setBookList] = useState(books);
  return (
    <div>
      {booklist.map((book) => {
        return <SingleBook key={book.id} book={book} />;
      })}
    </div>
  );
};
export default Booklist;
