import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className='mt-10'>
      {/* <Header /> */}
      <Outlet />
    </div>
  );
};

export default Layout;
