import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import LeftNavbar from "../Components/LeftNavbar/LeftNavbar";
import Navbar from "../Components/Navbar/Navbar";
import RightNavbar from "../Components/RightNavbar/RightNavbar";
import Footer from "../Components/Footer/Footer";

const HomeLayouts = () => {
  return (
    <div className="">
      <header>
        <Header></Header>
      </header>
      <section>
        <Navbar></Navbar>
      </section>
      <main className="w-11/12 mx-auto mt-16 lg:flex justify-between">
        <aside>
          <LeftNavbar></LeftNavbar>
        </aside>
       <section>
         <Outlet></Outlet>
       </section>
       <section></section>
        <aside>
          <RightNavbar></RightNavbar>
        </aside>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
