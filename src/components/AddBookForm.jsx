import { useState } from 'react';
import AddBookButton from './AddBookButton';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

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
        <input
          type="text"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <AddBookButton
          author={author}
          title={title}
          category={category}
          setAuthor={setAuthor}
          setCategory={setCategory}
          setTitle={setTitle}
        />
      </form>
    </>
  );
};

export default AddBookForm;
