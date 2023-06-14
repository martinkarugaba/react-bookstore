import { useState } from 'react';
import AddBookButton from './AddBookButton';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  return (
    <>
      <form>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <AddBookButton
          author={author}
          title={title}
          setAuthor={setAuthor}
          setTitle={setTitle}
        />
      </form>
    </>
  );
};

export default AddBookForm;
