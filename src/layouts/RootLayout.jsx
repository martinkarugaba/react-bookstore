import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RootLayout = () => (
  <div className="drop-shadow-2xl bg-off-white">
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);
export default RootLayout;
