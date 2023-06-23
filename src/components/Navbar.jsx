import { NavLink } from 'react-router-dom';
import profile from '../assets/profile.png';

const Navbar = () => (
  <div className="border-b shadow px-[6.25rem] py-[1.813rem] flex justify-between items-center">
    <div className="flex justify-start items-center gap-x-[3rem]">
      <h1 className="text-[1.875rem] font-montserat font-bold text-primary-blue">
        Bookstore CMS
      </h1>
      <nav className="flex justify-start items-center uppercase text-[0.813rem] gap-x-[2.563rem] font-montserat tracking-[1.9px]">
        <div className="cursor-pointer">
          <NavLink
            className="text-text-color font-light active:font-semibold"
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className="cursor-pointer">
          <NavLink
            className="text-text-color font-light active:font-semibold"
            to="categories"
          >
            Categories
          </NavLink>
        </div>
      </nav>
    </div>
    {/* account */}
    <div className="h-[2.813rem] w-[2.813rem] rounded-full border p-[0.875rem] cursor-pointer">
      <img src={profile} alt="account" />
    </div>
  </div>
);

export default Navbar;
