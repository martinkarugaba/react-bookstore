import { useState } from 'react';
import AddBookButton from './AddBookButton';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div className="py-[1.813rem]">
      <h2 className="uppercase font-montserat font-bold text-gray-400">
        add new book
      </h2>
      <form className="shadow text-base mt-[1.188rem] font-montserat font-light flex justify-between items-center">
        <input
          type="text"
          value={title}
          className="border w-[500px] py-2 px-2"
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <select
          className="border text-gray-400 w-[250px] h-[100%] py-2 px-2 bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled selected>
            Category
          </option>
          <option value="fiction">Fiction</option>
          <option value="religion">Religion</option>
          <option value="romance">Romance</option>
          <option value="non-fiction">Non-fiction</option>
          <option value="poetry">Poetry</option>
          <option value="crime">Crime</option>
        </select>
        <AddBookButton
          author={author}
          title={title}
          category={category}
          setAuthor={setAuthor}
          setCategory={setCategory}
          setTitle={setTitle}
        />
      </form>
    </div>
  );
};

export default AddBookForm;
