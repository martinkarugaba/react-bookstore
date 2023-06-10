import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="categories" element={<Categories />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
