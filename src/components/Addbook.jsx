import { useState } from "react";

const Addbook = () => {
  const [book, setBook] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Add book"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Addbook;
