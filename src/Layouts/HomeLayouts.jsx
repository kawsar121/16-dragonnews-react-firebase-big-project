import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import LeftNavbar from "../Components/LeftNavbar/LeftNavbar";
import Navbar from "../Components/Navbar/Navbar";
import RightNavbar from "../Components/RightNavbar/RightNavbar";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section>
        <Navbar></Navbar>
      </section>
      <main className="w-11/12 mx-auto mt-16 flex justify-between">
        <aside>
          <LeftNavbar></LeftNavbar>
        </aside>
       <section>
         <Outlet></Outlet>
       </section>
        <aside>
          <RightNavbar></RightNavbar>
        </aside>
      </main>
      
    </div>
  );
};

export default HomeLayouts;
