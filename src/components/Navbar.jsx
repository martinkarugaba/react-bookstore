import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>BookStore CMS</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="categories">Categories</NavLink>
      </nav>
    </div>
  );
};
export default Navbar;
