import { useState } from 'react';

const Addbook = () => {
  const [title, setBook] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Add book"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Addbook;
