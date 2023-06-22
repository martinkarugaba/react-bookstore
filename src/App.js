import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import RootLayout from './layouts/RootLayout';
import { fetchBooks } from './redux/books/booksSlice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />} />
    </Route>,
  ),
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return <RouterProvider router={router} />;
};
export default App;
