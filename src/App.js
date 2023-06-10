import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="categories" element={<Categories />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
