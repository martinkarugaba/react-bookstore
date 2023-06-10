import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="categories">Categories</NavLink>
    </nav>
  );
};
export default Navbar;
